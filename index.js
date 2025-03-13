function greetUser() {
    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("greetingMessage");

    if (name.trim() === "") {
        message.textContent = "Please enter your name!";
        message.style.color = "red";
    } else {
        message.textContent = `Hello, ${name}!`;
        message.style.color = "green";
    }
}
