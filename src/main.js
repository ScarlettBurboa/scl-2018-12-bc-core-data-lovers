const yearToFilter = selectYear(dataInjuries);
    document.getElementById('year_list').innerHTML = '';
    for (let i = 0; i < yearToFilter.length; i++){
        document.getElementById('year_list').innerHTML += '<option>' + yearToFilter[i] + '</option>'; 
    };
/*const butttonFilterYear = document.getElementById('filter_year');



const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

// evento click del botón
document.getElementById('btn').addEventListener('click', () => {

  document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click

  for (let i = 0; i < resultadoNombres.length; i++) {
    document.getElementById('root').innerHTML += '<p>' + resultadoNombres[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }

})   */


