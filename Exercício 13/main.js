let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let h2 = document.querySelector("h2");
    if (num1 < num3 + num2 && num2 < num1 + num3 && num3 < num1 + num2 && num1 != num2 && num1 != num3 && num2 != num3)
        h2.innerHTML = `É possível fazer um triângulo e este será Escaleno`;
    else  if (num1 < num3 + num2 && num2 < num1 + num3 && num3 < num1 + num2 && num1 == num2 && num2 != num3 )
        h2.innerHTML = `É possível fazer um triângulo e este será Isósceles`;
    else   if (num1 < num3 + num2 && num2 < num1 + num3 && num3 < num1 + num2 && num1 == num2 && num1 == num3 && num2 == num3)
        h2.innerHTML = `É possível fazer um triângulo e este será Equilátero`; 
    else    
        h2.innerHTML = `Não é possível fazer um triângulo`;
});

