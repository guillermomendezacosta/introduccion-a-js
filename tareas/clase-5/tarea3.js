const calcular = document.querySelector('#calcular');
const textoH1 = document.querySelector('strong');
function segundosReal(segundosTotales){
    if (segundosTotales > 60){
        segundosReales = segundosTotales % 60;
        sumaMinutos = (segundosTotales - segundosReales) / 60;
        minutosTotales = minutosTotales + sumaMinutos;
      
    }
}

function minutosReal(minutosTotales){
    if (minutosTotales > 60){
        minutosReales = minutosTotales % 60;
        sumaHoras = (minutosTotales - minutosReales) / 60;
        horasTotales = horasTotales + sumaHoras;
      
    }
}

calcular.onclick = function(){
    horasClase1 = Number(document.querySelector('#horas-clase-1').value);
    minutosClase1 = Number(document.querySelector('#minutos-clase-1').value);
    segundosClase1 = Number(document.querySelector('#segundos-clase-1').value);
    horasClase2 = Number(document.querySelector('#horas-clase-2').value);
    minutosClase2 = Number(document.querySelector('#minutos-clase-2').value);
    segundosClase2 = Number(document.querySelector('#segundos-clase-2').value);
    horasClase3 = Number(document.querySelector('#horas-clase-3').value);
    minutosClase3 = Number(document.querySelector('#minutos-clase-3').value);
    segundosClase3 = Number(document.querySelector('#segundos-clase-3').value);
    horasClase4 = Number(document.querySelector('#horas-clase-4').value);
    minutosClase4 = Number(document.querySelector('#minutos-clase-4').value);
    segundosClase4 = Number(document.querySelector('#segundos-clase-4').value);
    horasClase5 = Number(document.querySelector('#horas-clase-5').value);
    minutosClase5 = Number(document.querySelector('#minutos-clase-5').value);
    segundosClase5 = Number(document.querySelector('#segundos-clase-5').value);
    horasClase6 = Number(document.querySelector('#horas-clase-6').value);
    minutosClase6 = Number(document.querySelector('#minutos-clase-6').value);
    segundosClase6 = Number(document.querySelector('#segundos-clase-6').value);
    horasTotales = horasClase1 + horasClase2 + horasClase3 + horasClase4 + horasClase5 + horasClase6;
    minutosTotales = minutosClase1 + minutosClase2 + minutosClase3 + minutosClase4 + minutosClase5 + minutosClase6;
    segundosTotales = segundosClase1 + segundosClase2 + segundosClase3 + segundosClase4 + segundosClase5 + segundosClase6;

    segundosReal(segundosTotales);
    minutosReal(minutosTotales);

    console.log(horasTotales);
    console.log(minutosReales);
    console.log(segundosReales);

    textoH1.textContent = 'La duración de todas las clases es ' + horasTotales + ' horas,' + minutosReales + ' minutos y ' + segundosReales + ' segundos.';
    return false;
}