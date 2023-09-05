let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let h2 = document.querySelector("h2");
    if (num1 % 4 == 0)
        h2.innerHTML = ` O ano ${num1} é bissexto!`;
    else  
        h2.innerHTML = `O ano ${num1} não é bissexto`;
});
        