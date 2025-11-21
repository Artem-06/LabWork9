document.addEventListener("DOMContentLoaded", () => {
    const deck = [
        { name: '6', file: '6', value: 6 },
        { name: '7', file: '7', value: 7 },
        { name: '8', file: '8', value: 8 },
        { name: '9', file: '9', value: 9 },
        { name: '10', file: '10', value: 10 },
        { name: 'Валет', file: 'jack', value: 2 },
        { name: 'Дама', file: 'queen', value: 3 },
        { name: 'Король', file: 'king', value: 4 },
        { name: 'Туз', file: 'ace', value: 11 }
    ];

    const btn = document.getElementById("=generate");
    const roundElem = document.getElementById("round");

    const userNameElem = document.getElementById("user");
    const userTotalElem = document.getElementById("userTotal");
    const userCardInner = document.querySelector("#userCard .card__inner");
    const userCardImage = document.getElementById("userCardImage");

    const compTotalElem = document.getElementById("compTotal");
    const compCardInner = document.querySelector("#compCard .card__inner");
    const compCardImage = document.getElementById("compCardImage");

    let round = 0;
    const MAX_ROUNDS = 3;
    let userTotal = 0;
    let compTotal = 0;
    let playing = true;

    let rawName = prompt("Введіть своє ім'я:", "");
    if (!rawName || !rawName.trim()) rawName = "Гість";
    rawName = rawName.trim();
    userNameElem.textContent = rawName;

    function randInt(max) { return Math.floor(Math.random() * max); }
    function drawCard() { return deck[randInt(deck.length)]; }

    function setCardImage(imgElem, fileName) {
        imgElem.src = `images/${fileName}.png`;
        imgElem.alt = fileName;
    }

    function flipCard(innerElem, toFlipped = true) {
        if (toFlipped) innerElem.classList.add("is-flipped");
        else innerElem.classList.remove("is-flipped");
    }

    function playRound() {
        if (!playing) return;
        if (round >= MAX_ROUNDS) return;

        round++;
        roundElem.textContent = round;

        flipCard(userCardInner, false);
        flipCard(compCardInner, false);

        setTimeout(() => {
            const u = drawCard();
            const c = drawCard();

            setCardImage(userCardImage, u.file);
            setCardImage(compCardImage, c.file);

            userTotal += u.value;
            compTotal += c.value;
            userTotalElem.textContent = userTotal;
            compTotalElem.textContent = compTotal;

            setTimeout(() => flipCard(userCardInner, true), 220);
            setTimeout(() => flipCard(compCardInner, true), 220);

            if (round === MAX_ROUNDS) {
                playing = false;
                btn.disabled = true;
                setTimeout(finishGame, 450);
            }
        }, 160);
    }

    function finishGame() {
        let msg = `Гра завершена!\n\n${rawName}: ${userTotal} оч.\nКомп'ютер: ${compTotal} оч.\n\n`;
        if (userTotal > compTotal) msg += "Ви перемогли! 🎉";
        else msg += "Переміг комп'ютер";
        alert(msg);
    }

    document.querySelectorAll(".card__inner").forEach(ci => {
        ci.addEventListener("click", () => {
            ci.classList.toggle("is-flipped");
        });
    });

    // Прив'язки
    btn.addEventListener("click", playRound);
    // Початковий стан UI
    userTotalElem.textContent = userTotal;
    compTotalElem.textContent = compTotal;
    roundElem.textContent = round;
});
