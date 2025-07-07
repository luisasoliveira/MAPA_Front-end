document.addEventListener("DOMContentLoaded", function() {

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        let isValid = true;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validar nome
        if (name.trim() === "") {
            isValid = false;
            alert("Por favor escreva seu nome");
        }

        // Validar email
        if (email.trim() === "" || !validateEmail(email)) {
            isValid = false;
            alert("Por favor insira um email válido.");
        }

        // Validar mensagem
        if (message.trim() === "") {
            isValid = false;
            alert("Aqui você deve escrever uma mensagem pro nosso grupo de coder girls!");
        }

        if (!isValid) {
            event.preventDefault(); 
        }
    });

    // Validação de email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

 
    const blogLinks = document.querySelectorAll(".blog-link");
    blogLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#ff4081"; 
        });
        link.addEventListener("mouseout", function() {
            this.style.color = ""; 
        });
    });
});