console.log("Final NBA Denver vs Miami")
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simularCuarto(equipo) {
    let resultadoCuarto = 0;
    for (let i = 0; i < 12; i++) {
        const puntos = generarNumeroAleatorio(1, 3);
        resultadoCuarto += puntos;
    }
    console.log(`Resultado de ${equipo} en el cuarto: ${resultadoCuarto} puntos`);
    return resultadoCuarto;
}

function simularPartido() {
    const equipoMiami = "Miami";
    const equipoDenver = "Denver";
    let resultadoMiami = 0;
    let resultadoDenver = 0;

    for (let cuarto = 1; cuarto <= 4; cuarto++) {
        console.log(`--- Cuarto ${cuarto} ---`);
        resultadoMiami += simularCuarto(equipoMiami);
        resultadoDenver += simularCuarto(equipoDenver);
    }

    console.log(" Resultado final: ");
    console.log(`${equipoMiami}: ${resultadoMiami} puntos`);
    console.log(`${equipoDenver}: ${resultadoDenver} puntos`);

    if (resultadoMiami > resultadoDenver) {
        document.write('<div class="imagen"><img src=" https://imgresizer.eurosport.com/unsafe/2560x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2013/06/21/1031180-19027182-2560-1440.jpg" alt="Campeon Miami" width="550" ></div>')
        document.write('<div class="texto"><p>¡Ganador Miami!</p>')
        document.write('<div class="cambio"><p>En caso de no gustar el resultado recargue y puede que cambie..</p>')
        console.log("¡Miami gana el partido!");


    } else if (resultadoDenver > resultadoMiami) {

        document.write('<div class="imagen"><img src="https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/0e/53/0e5351e8a5932ddb7a0068cc8cc2e33dc23907bb.jpg" alt="Campeon Denver" width="550"></div>')
        document.write('<div class="texto"><p>¡Ganador Denver!</p>')
        document.write('<div class="cambio"><p>En caso de no gustar el resultado recargue y puede que cambie..</p>')
        console.log("¡Denver gana el partido!");

    } else {
        document.write('<div class="imagen"><img src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-06/nba-plain--1d203242-9b6a-437f-aea3-a4dfbb546386.png?itok=bUF0_it5" alt="Empatan" width="550"></div>')
        document.write('<div class="texto"><p>¡Empataron! La prorroga se hara en una proxima entrega</p>')
        document.write('<div class="cambio"><p>En caso de no gustar el resultado recargue y puede que cambie..</p>')
        console.log("¡El partido termina en empate!");
    }
}

simularPartido();
