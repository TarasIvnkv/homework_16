const buttons = document.querySelectorAll(`[data-btn="action" ]`);
console.dir(buttons);

const messageFunc = (functionName, button) => {
    console.log(`${functionName} for ${button}`);
}

const firstFunc = event => {
    const buttonTarget = event.target;
    const targetTxt = buttonTarget.textContent;

    messageFunc(`First function`, targetTxt);
    buttonTarget.removeEventListener(`click`, firstFunc);
    buttonTarget.addEventListener(`click`, secondFunc);
}


const secondFunc = event => {
    const buttonTarget = event.target;
    const targetTxt = buttonTarget.textContent;

    messageFunc(`Second function`, targetTxt);
    buttonTarget.removeEventListener(`click`, secondFunc);
    buttonTarget.addEventListener(`click`, lastFunc);
}

const lastFunc = event => {
    const buttonTarget = event.target;
    const targetTxt = buttonTarget.textContent;

    messageFunc(`Last function`, targetTxt);
}

buttons
    .forEach(button => {
        button.addEventListener(`click`, firstFunc);
    })







