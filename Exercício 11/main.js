let button = document.querySelector("button");
button.addEventListener('click', () => {

    let saldomedio = Number(document.getElementById("num1").value)
    let vinte = saldomedio + (20/100 * saldomedio)
    let trinta = saldomedio + (30/100 * saldomedio)
    let quarenta = saldomedio + (40/100 * saldomedio)
    let h2 = document.querySelector("h2")
        
    if (saldomedio >=201 && saldomedio <= 400)
        h2.innerHTML = `Voce recebe 20% do valor do seu saldo médio, equivalente a ${vinte} `
    else if (saldomedio >= 401 && saldomedio <= 600)
        h2.innerHTML = `Voce recebe 30% do valor do seu saldo médio, equivalente a ${trinta}`
    else if(saldomedio >= 601 )
        h2.innerHTML = `Voce recebe 40% do valor do seu saldo médio, equivalente a ${quarenta}`
    else
        h2.innerHTML = `Você não recebe crédito`
})
    