// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".plan button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const planName = this.parentNode.querySelector("h2").textContent;
            openWhatsApp(planName);
        });
    });
});

function openWhatsApp(planName) {
    const phoneNumber = '+9613226752'; // Your phone number in international format without '+'
    const message = encodeURIComponent(`You want to enroll in the ${planName}`);
    const whatsappUrl = `https://wa.me/${+96103226752}?text=${enroll}`;

    window.location.href = whatsappUrl;
}
