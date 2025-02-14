document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

// Moving the "No" button away when hovered over
const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

document.querySelectorAll(".date-btn").forEach(button => {
    button.addEventListener("click", function() {
        let chosenDate = this.getAttribute("data-date");
        let message = "";

        if (chosenDate === "Coffee Date") {
            message = "Starbucks at 4 PM ☕ I'll pick you up! 🚗💖";
        } else if (chosenDate === "Dinner Date") {
            message = "Effina’s at 7 PM 🍽️ Can't wait! 🥰";
        } else if (chosenDate === "Movie Night") {
            message = "AmStar at 8 PM 🎬 Everything on me! 🍿😍";
        }

        document.getElementById("final-message").innerText = message;
        document.getElementById("popup").style.display = "none";
        document.getElementById("final-popup").style.display = "block";
    });
});
