
const birthdayScreen = document.getElementById("birthdayScreen");
const envelopeScreen = document.getElementById("envelopeScreen");

const countdownNumber = document.getElementById("countdownNumber");
const countdownText = document.getElementById("countdownText");
const instruction = document.getElementById("instruction");

const cake = document.getElementById("cake");

const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelopeInstruction = document.getElementById("envelopeInstruction");

let count = 3;

// BIRTHDAY COUNTDOWN

function startCountdown() {

    countdownNumber.textContent = count;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdownNumber.textContent = count;

        } else {

            clearInterval(timer);

            countdownNumber.textContent = "🎉";
            countdownText.textContent = "Happy Birthday, Anna!";
            instruction.textContent = "And... the candles are gone!";

            // Blow out the candles
            cake.classList.add("blown");

            // Show the envelope after the animation
            setTimeout(() => {

                birthdayScreen.classList.add("hidden");
                envelopeScreen.classList.remove("hidden");

            }, 1800);

        }

    }, 1000);
}


// OPEN THE LETTER

envelopeWrapper.addEventListener("click", () => {

    if (!envelopeWrapper.classList.contains("open")) {

        envelopeWrapper.classList.add("open");

        envelopeInstruction.textContent =
            "A little letter, written with lots of love. 💙";

    }

});


// START COUNTDOWN

window.addEventListener("load", () => {

    startCountdown();

});
