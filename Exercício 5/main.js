let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let h2 = document.querySelector("h2");
    if (num1*num2 % 2 == 0)
        h2.innerHTML = `${num1} e ${num2} são múltiplos entre si`;
    else  
        h2.innerHTML = `${num1} não são múltiplos ${num2}`   
        
});