let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let h2 = document.querySelector("h2");
    if (num1 > num2 && num1 > num3)
        h2.innerHTML = `${num1} é o maior valor`;
    else  if (num2 > num1 && num2 > num3)
        h2.innerHTML = `${num2} é o maior valor`;   
    else    
        h2.innerHTML = `${num3} é o maior valor`;
        
});