document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

document.getElementById("contactForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("message");

    if(name.value === "" || email.value === "" || msg.value === "") {
        alert("Please complete all fields.");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});
