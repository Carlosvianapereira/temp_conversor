function converterCtoF(TempC) {
    const tempF = (TempC * 9/5) + 32
    console.log(`temperatura = ${tempF} F`);

    return tempF
}

function converter(){
    console.log('Ei Clicou');
    let TempC = document.getElementById('tempC').value;
    console.log(`Temp ºC: ${TempC}`);

   
    // chamando a função que converte de C para F
    const resultado = converterCtoF(TempC)

    document.getElementById('resultado').innerHTML = resultado;
    
}