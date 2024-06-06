let buttonLang = document.querySelector('.language');
let textLang = document.querySelector('.textLang');

buttonLang.addEventListener('click', () => {
    if (textLang.textContent == "en") {
        textLang.textContent = "ru";
    } else {
        textLang.textContent = "en";
    }
});