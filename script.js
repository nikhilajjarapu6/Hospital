document.addEventListener('DOMContentLoaded', function() {


document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;

    const modalMessage = `Dear ${name}, your appointment is booked. We will notify you shortly and check your WhatsApp for confirmation.`;
    document.getElementById('modal-message').textContent = modalMessage;

    
    document.getElementById('confirmation-modal').style.display = 'flex';
});


document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('confirmation-modal').style.display = 'none';
});
})