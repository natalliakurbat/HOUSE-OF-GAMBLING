let buttonLang = document.querySelector('.language');
let textLang = document.querySelector('.textLang');

buttonLang.addEventListener('click', () => {
    /* console.log(buttonLang.textContent);*/
    if (textLang.textContent == "en") {
        textLang.textContent = "ru";
    } else {
        textLang.textContent = "en";
    }
});