/**CATEGORÍA ACCIDENTES DE AGUA */
const resultSumCategoryWater = sumByCategoryAverage;
const resultAverageCategoryWater = resultCategoryAverageWater;
const resultMedianCategoryWater = resultMediancategoryAverageWater;
const resultMinNumberCategoryWater = resultNumHighCategory;
const resultMaxNumberCategoryWater = resultNumMinCategory;
const showTypeAccidentsAcuatics = document.getElementById('accidents_acuatics').addEventListener('click', () =>{
const titleCategoryWater = document.getElementById('titleCategoryWater');
titleCategoryWater.classList.add('show')
const list1 = document.getElementById('listAccidentAcuatics');
list1.classList.add('show');  
const dataCalculationsByType = document.getElementById('dataCalculationsByType');
dataCalculationsByType.classList.add('show');
document.getElementById('totalSumCategory').innerHTML += `<span>People injured from 1960 to 2016 : <b>${resultSumCategoryWater}</b></span>`;
document.getElementById('totalAveregeCategory').innerHTML += `<span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryWater}</b></span>`;
document.getElementById('totalMedianCategory').innerHTML += `<span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryWater}</b></span>`;
document.getElementById('totalNumMinCategory').innerHTML += `<span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryWater}</b> and corresponds to the subcategory:  <b>Injured Persons On Freight Vessel</b></span> `;
document.getElementById('totalNumMaxCategory').innerHTML += `<span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryWater}</b> and corresponds to the subcategory:  <b>Injured Persons On Recreational Boating</b></span>`;
});
const resultArrayCategoryWater = totalOfInjuriesInAccidents(dataInjuries);
const TotalSumInjuriedFreightVessel = sumAccidentsInfreightVessel;
const promedyInjuriedFreightVessel = promedyFreightVessel;
const medianInjuriedFreightVessel = resultMedianFreightVessel;
const numHightInjuriedFreightVessel = funnumHighFreightVessel;
const numLowInjuriedFreightVessel = funnumLowFreightVessel;
document.getElementById('freight-vessel').addEventListener('click', ()=>{
  const showSelectFilterAndSort = document.getElementById('showData');
  showSelectFilterAndSort.classList.add('show');
  document.getElementById('totalSumofAccidents').innerHTML = '';
  document.getElementById('totalSumofAccidents').innerHTML = `<span>Total number of people injured from 1960 to 2016: <b>${TotalSumInjuriedFreightVessel}</b></span>`;
  document.getElementById('promedyAccidents').innerHTML = '';
  document.getElementById('promedyAccidents').innerHTML = `<span>Average from 1960 to 2016 of injuries: <b>${promedyInjuriedFreightVessel}</b></span>`;
  document.getElementById('medianAccidents').innerHTML = '';  
  document.getElementById('medianAccidents').innerHTML = `<span>Arithmetic median of the wounded people from 1960 to 2016: <b>${medianInjuriedFreightVessel}</b></span>`;
  document.getElementById('numHightAccidents').innerHTML = '';  
  document.getElementById('numHightAccidents').innerHTML = `<span>The largest number of injured between 1960 and 2016: <b>${numHightInjuriedFreightVessel}</b> of the year <b>2003</b></span>`;
  document.getElementById('numLeastAccidents').innerHTML = '';  
  document.getElementById('numLeastAccidents').innerHTML = `<span>The least number of injured between 1960 and 2016: <b>${numLowInjuriedFreightVessel}</b> from <b>1960 to 2001</b></span>`; 
  document.getElementById('showDataSelect').innerHTML = '';
   for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayFreightVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayFreightVessel[i]} people injured by this type of accident.</li>`
  }
  document.getElementById('showDataCompleteByCategory').addEventListener('click', ()=>{
    const idShowContainerData = document.getElementById('containerData');
  idShowContainerData.classList.add('show');
    const selectBySort = document.getElementById('toFilter');
    selectBySort.classList.add('show');
    const showAllGruop = document.getElementById('showDataSelect');
    showAllGruop.classList.add('show');
    const filterYearid = document.getElementById('filterYear');
    document.getElementById('filterYear').innerHTML = '';
    const selectAll = document.createElement('option');
    const selectAllText = document.createTextNode('Show All');
    selectAll.appendChild(selectAllText); 
    filterYearid.appendChild(selectAll);   
    for(let i=0; i<newArrayYear.length; i++){
      document.getElementById('filterYear').innerHTML += `<option>${newArrayYear[i]}</option>`
    }
  });
  document.getElementById('hideDataCompleteByCategory').addEventListener('click', ()=>{
    const idShowContainerData = document.getElementById('containerData');
    idShowContainerData.classList.add('hide');
    const selectBySort = document.getElementById('toFilter');
    selectBySort.classList.add('hide');
  });

});
const TotalSumInjuriedVesselRelated = sumAccidentsWaterVesselRelated;
document.getElementById('water-vessel').addEventListener('click', () =>{
  document.getElementById('totalSumofAccidentsWater').innerHTML = '';
  document.getElementById('totalSumofAccidentsWater').innerHTML = `Total people injured in related accidents: ${TotalSumInjuriedVesselRelated}`
  document.getElementById('showDataSelect').innerHTML = '';
  for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayFreightVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayFreightVessel[i]} people injured by this type of accident.</li>`
  }
});
const TotalSumInjuriedNotRelatedToVessel = sumAccidentsNotRelatedToVessel;
document.getElementById('water-not-vessel').addEventListener('click', () =>{
  document.getElementById('totalSumofAccidentsWater').innerHTML = '';
  document.getElementById('totalSumofAccidentsWater').innerHTML = `Total people injured in related accidents: ${TotalSumInjuriedNotRelatedToVessel}`
  document.getElementById('showDataSelect').innerHTML = '';
  for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayNotRelatedToVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayNotRelatedToVessel[i]} people injured by this type of accident.</li>`
  }
});
const TotalSumInjuriedAccidentsInWater = sumAccidentsInWater;
document.getElementById('water').addEventListener('click', () =>{
  document.getElementById('totalSumofAccidentsWater').innerHTML = '';
  document.getElementById('totalSumofAccidentsWater').innerHTML = `Total people injured in related accidents: ${TotalSumInjuriedAccidentsInWater}`
  document.getElementById('showDataSelect').innerHTML = '';
  for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayWater){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayWater[i]} people injured by this type of accident.</li>`
  }
});
const TotalSumInjuriedRecreationalBoating = sumAccidentsRecreationalBoating;
document.getElementById('recreational-boating').addEventListener('click', () =>{
  document.getElementById('totalSumofAccidentsWater').innerHTML = '';
  document.getElementById('totalSumofAccidentsWater').innerHTML = `Total people injured in related accidents: ${TotalSumInjuriedRecreationalBoating}`
  document.getElementById('showDataSelect').innerHTML = '';
  for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayRecreationalBoating){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayRecreationalBoating[i]} people injured by this type of accident.</li>`
  }
});
const TotalSumInjuriedPassengerVessel = sumAccidentsPassengerVessel;
document.getElementById('passenger-vessel').addEventListener('click', () =>{
  document.getElementById('totalSumofAccidentsWater').innerHTML = '';
  document.getElementById('totalSumofAccidentsWater').innerHTML = `Total people injured in related accidents: ${TotalSumInjuriedPassengerVessel}`
  document.getElementById('showDataSelect').innerHTML = '';
  for(i in resultArrayCategoryWater.arrayYear && resultArrayCategoryWater.arrayPassengerVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${resultArrayCategoryWater.arrayYear[i]} there were ${resultArrayCategoryWater.arrayPassengerVessel[i]} people injured by this type of accident.</li>`
  }
});
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Freight_Vessel} people injured by this type of accident.</li>` 
  })
});
const selectSort = document.getElementById('null-number');
selectSort.addEventListener('change', () =>{
  let sort = sortData(dataInjuries);
  showDataSelect.innerHTML = '';
  sort.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Freight_Vessel} people injured by this type of accident.</li>` 
  }) 
});
/** */