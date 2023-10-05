document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector("#burger-menu");
    const navList = document.querySelector(".nav-list");

    burgerMenu.addEventListener("click", function() {
        console.log("the click works")
        navList.classList.toggle("active");
    });
});

// COUNTDOWN FUNCTION
document.addEventListener("DOMContentLoaded", function() {
    const countdownDate = new Date("2023-12-31 23:59:59").getTime(); // Set your target date and time here

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");

        if (distance < 0) {
            clearInterval(interval);
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
        }
    };

    updateCountdown(); // Initial call to display countdown immediately

    const interval = setInterval(updateCountdown, 1000); // Update the countdown every second
});