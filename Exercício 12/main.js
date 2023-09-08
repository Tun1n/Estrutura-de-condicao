let button = document.querySelector("button");
button.addEventListener('click', () => {

    let código = Number(document.getElementById("num1").value)
    let quantidade = Number(document.getElementById("num2").value)
    let preço100e103 = 1.20 * quantidade
    let preço101e104 = 1.30 * quantidade
    let preço102 = 1.50 * quantidade
    let preço105 =  quantidade
    let h2 = document.querySelector("h2")
        
    if (código == 100)
        h2.innerHTML = `O preço de ${quantidade} cachorro(s) quente(s) é R$ ${preço100e103} `
    else if (código == 103)
        h2.innerHTML = `O preço de ${quantidade} hambúrguer(s) é R$ ${preço100e103} `
    else if(código == 102 )
        h2.innerHTML = `O preço de ${quantidade} Bauru com ovo é R$ ${preço102} `
    else if(código == 101 )
         h2.innerHTML = `O preço de ${quantidade} Bauru simples é R$ ${preço101e104} `
    else  if(código == 104 )
         h2.innerHTML = `O preço de ${quantidade} Cheeseburguer é R$ ${preço101e104} `
    else  if(código == 105 )
         h2.innerHTML = `O preço de ${quantidade} Refrigerante(s) é R$ ${preço105} `
    else
        h2.innerHTML = `Digite os códigos do cardápio `
    
})
    
