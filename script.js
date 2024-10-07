const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const messageDisplay = document.querySelector('.message'); 

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
        rollDice(random);
    } else {
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                messageDisplay.textContent = "You got 1!";
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                messageDisplay.textContent = "You got 2!";
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                messageDisplay.textContent = "You got 3!";
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                messageDisplay.textContent = "You got 4!";
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                messageDisplay.textContent = "You got 5!";
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                messageDisplay.textContent = "You got 6!";
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 4050);
}

rollBtn.addEventListener('click', randomDice);