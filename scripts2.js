document.querySelector(".convert-button").addEventListener("click", ConverterMoeda)

document.querySelector(".currency-select-one").addEventListener("change",() => {
    ConverterDe = document.querySelector(".currency-select-one").value
})

document.querySelector(".currency-select").addEventListener("change",() => {
    ConverterPara = document.querySelector(".currency-select").value
})

let ConverterDe
let ConverterPara

const valoresParaConversao = {
    valoresParaReal : {
        dolarToday : 5.1,
        euroToday : 5.5,
        libraToday : 6.10,
        bitcoinToday : 8.2,
        realToday : 1.0
    },
    valoresParaDolar : {
        dolarToday : 1.0,
        euroToday : 0.9 ,
        libraToday : 0.8,
        bitcoinToday : 0.000017,
        realToday : 5.1
    }
}

function ConverterMoeda(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    switch (ConverterDe) {
        case "real":
            alert(inputCurrencyValue / valoresParaConversao.valoresParaReal[`${ConverterPara}Today`])
            break;
        case "dolar":
            
            break;
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/europa.png"
    }
    
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }
        convertValues()
}

const dolarToday = 5.2
const euroToday = 5.5
const libraToday = 6.10
const bitcoinToday = 8.2
const realToday = 1.0

const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")