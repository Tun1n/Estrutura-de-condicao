let button = document.querySelector("button");
button.addEventListener('click', () => {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);
    let h2 = document.querySelector("h2");
    if (a > b && a > c && b > c )
        h2.innerHTML = `${a}; ${b} ;${c}`;
    else if (a > b && a > c && c > b)
        h2.innerHTML = `${a}; ${c}; ${b}`
    else  if (b > a && b > c && c > a)
        h2.innerHTML = `${b} ; ${c} ; ${a}`;  
    else if (b > a && b > c && a > c) 
        h2.innerHTML = `${b} ; ${a} ; ${c}`;  
    else  if (c > a && c > b && b > a)
        h2.innerHTML = `${c} ; ${b}; ${a}`;
    else if (c > a && c > b && a > b)
        h2.innerHTML = `${c}; ${a} ; ${b}`;
    else    
        h2.innerHTML = `A sequência possui valores iguais`
});