const scriptURL = 'https://script.google.com/macros/s/AKfycbzx6SoLzgpwk7w7LbavKuQZsXCoPrT_CRP3DLNjZmHotc-d5MoETpQ9srqLduugIFn4Qg/exec';
const form = document.forms['submit'];


// Get the current timestamp
const timestamp = new Date();

// Extract date and time components
const submitDate = timestamp.toISOString().slice(0, 10);
const submitTime = timestamp.toTimeString().slice(0, 8);

// Set the values of the hidden input fields
document.getElementById("submitDate").value = submitDate;
document.getElementById("submitTime").value = submitTime;




form.addEventListener('submit', e => {
    e.preventDefault();
    


    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Handle the response here if needed.
            console.log('Response:', response);
            form.reset(); // Reset the form immediately.
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.value = 'Submit'; // Reset the submit button text if there's an error during submission.
        });
});
