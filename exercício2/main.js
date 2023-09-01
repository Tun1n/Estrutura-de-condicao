let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let h2 = document.querySelector("h2");
    let media = ((4*num1) + (3*num2) + (3*num3)) / 3
    if (media >= 7)
        h2.innerHTML = `A média é ${media} e voce foi Aprovado`;
    else
         if(media >= 5)
            h2.innerHTML = `A média é ${media} e voce foi Recuperação`;
            else 
            h2.innerHTML = `A média é ${media} e voce foi Reprovado`;

}); 