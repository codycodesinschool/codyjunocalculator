function clearText() {
    result.innerText = "";
    mathed = false;
}

function calculate() {
    arithmetic = result.innerText;
    arithmetic = arithmetic.replace("x", "*");
    arithmetic = arithmetic.replace("%", "/");
    if (/\d\/\w*0/.test(arithmetic)) {
        window.location.replace("https://www.youtube.com/watch?v=a3Z7zEc7AXQ");
        return;
    }
    console.log(arithmetic)

    result.innerText = eval(arithmetic);
    mathed = true;
}

let sound = new Howl({
    src: ['button.mp3']
});

let buttons = document.querySelectorAll("button");
let result = document.querySelector(".result");
let mathed = false;
result.innerHtml = "";
for (let button of buttons) {
    button.onclick = () => {
        sound.play();
        let html = button.innerText;
        console.log(html)
        switch (html) {
            case "Clear":
                clearText();
                break;
            case "=":
                calculate();
                mathed = true;
                break;
            default:
                if (mathed) {
                    clearText();
                }
                result.innerText += html;
                break;
        }
    }
}