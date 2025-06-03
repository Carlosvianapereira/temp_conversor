function converterCtoF(TempC) {
    const tempF = (TempC * 9/5) + 32
    console.log(`temperatura = ${tempF} F`);

    // o return retorna o que é desejado, neste caso a temp convertida qjue está na variavel tempF
    return tempF
}

function converter(){
    console.log('Ei Clicou');
    let TempC = document.getElementById('tempC').value;
    console.log(`Temp ºC: ${TempC}`);

   
    // chamando a função que converte de C para F
    const resultado = converterCtoF(TempC)
    //Exibe o resultado na tag que posuui um id chamado resultado no HTML 
    document.getElementById('resultado').innerHTML = resultado;
    
}