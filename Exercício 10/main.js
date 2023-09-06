let button = document.querySelector("button");
button.addEventListener('click', () => {

    let idade = Number(document.getElementById("num1").value)
    let h2 = document.querySelector("h2")
    if (idade >=5 && idade <= 7)
        h2.innerHTML = `O nadador está no infantil A`
    else if (idade >= 8 && idade<=10)
        h2.innerHTML = `O nadador está no infantil B`
    else if(idade>= 11 && idade <= 13 )
        h2.innerHTML = `O nadador está no juvenil A`
    else if(idade >= 14 && idade <= 17)
        h2.innerHTML = `O nadador está no juvenil B`
    else
        h2.innerHTML = `O nadador está no adulto`
})
    