let button = document.querySelector("button");
button.addEventListener('click', () =>  {
    let a = Number(document.getElementById('valor1').value);
    let b = Number(document.getElementById('valor2').value);
    let c = Number(document.getElementById('valor3').value);
    let Delta = (b**2) - (4*a*c);
    Delta = parseInt(Delta);
    let divisao = 2 * a;
    let raiz = Math.sqrt(Delta);
    let x1 = (-b + raiz)/divisao;
    let x2 = (-b - raiz)/divisao;
    let h2 = document.querySelector("h2");
    
    if (Delta > 0 )
    {   
        h2.innerHTML = `Delta vale ${Delta}, x1 vale ${x1} e x2 vale ${x2} `;
    }
    else
        {
            h2.innerHTML = `Não foi possível calcular porque o delta é menor que zero`;
        }
});