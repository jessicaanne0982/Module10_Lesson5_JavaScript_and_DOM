function changeColor() {
    document.getElementById("box").classList.add("highlighted");
}

function glow() {
    document.getElementById("buttonHover").classList.add("glowEffect");
}

function noGlow() {
    document.getElementById("buttonHover").classList.remove("glowEffect");
}

function changeImage() {
    const newImageSrc = "theater2.jpg";
    document.getElementById("image").src = newImageSrc;
}

function changeImageBack() {
    const newImageSrc = "theater1.jpg";
    document.getElementById("image").src = newImageSrc;
}

function changeText() {
    const text = document.getElementById("changeText");

    text.innerHTML = "Hello, and welcome to the wonderful world of DOM!";
}

function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    alert("Welcome " + username + "! Thank you for signing in!");
    document.getElementById("myForm").reset();
}