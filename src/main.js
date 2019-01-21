/**CATEGORÍA ACCIDENTES DE AGUA */
const data = totalOfInjuriesInAccidents(dataInjuries);
const resultSumCategoryWater = sumByCategoryAverage;
const resultAverageCategoryWater = resultCategoryAverageWater;
const resultMedianCategoryWater = resultMediancategoryAverageWater;
const resultMinNumberCategoryWater = resultNumMinCategory;
const resultMaxNumberCategoryWater = resultNumHighCategory;
const showTypeAccidentsAcuatics = document.getElementById('accidents_acuatics').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryWater}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryWater}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryWater}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryWater}</b> and corresponds to the subcategory:  <b>Injured Persons On Freight Vessel</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryWater}</b> and corresponds to the subcategory:  <b>Injured Persons On Recreational Boating</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-1-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons On Freight Vessel`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-1-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons On Water Vessel Related`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-1-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons On Water Not Related To Vessel Casualties`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-1-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons On Water`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
  //
  const li5 = document.createElement('li');
  li5.setAttribute('id', 'sub-category-1-5');
  const button5 = document.createElement('button');
  button5.classList.add('buttonbylink');
  const buttontext5 = document.createTextNode(`Injured Persons On Recreational Boating`);
  ulListSubCategory.appendChild(li5);
  li5.appendChild(button5);
  button5.appendChild(buttontext5);
  //
  const li6 = document.createElement('li');
  li6.setAttribute('id', 'sub-category-1-6');
  const button6 = document.createElement('button');
  button6.classList.add('buttonbylink');
  const buttontext6 = document.createTextNode(`Injured Persons On Passenger Vessel`);
  ulListSubCategory.appendChild(li6);
  li6.appendChild(button6);
  button6.appendChild(buttontext6);
  //        
  document.getElementById('sub-category-1-1').addEventListener('click' , () =>{
      const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
    ShowButtonShowData.classList.add('show');
    document.getElementById('show-data-subcategory').addEventListener('click', () =>{
      document.getElementById('showDataSelect').innerHTML = '';
      const showDataMoreFilter = document.getElementById('show-data-more-filter');
    showDataMoreFilter.classList.add('show');
    const showAllGruop = document.getElementById('showDataSelect');
    showAllGruop.classList.add('show');
    const filterYearid = document.getElementById('filterYear');
    document.getElementById('filterYear').innerHTML = '';
    const selectAll = document.createElement('option');
    const selectAllText = document.createTextNode('Show All');
    selectAll.appendChild(selectAllText); 
    filterYearid.appendChild(selectAll);   
    for(i in data.arrayYear){
      document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
    }
    for(i in data.arrayYear && data.arrayFreightVessel){
        document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayFreightVessel[i]} people injured by this type of accident.</li>`
      }
    })
    const selectYear = document.getElementById('filterYear');
    selectYear.addEventListener('change', () => {
      let condition = selectYear.options[selectYear.selectedIndex].text;
      let filtered = filterData(dataInjuries, condition);
      showDataSelect.innerHTML = '';
      filtered.forEach(element => {
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Freight_Vessel} people injured by this type of accident.</li>` 
  })
});
    const selectNullOrNumber = document.getElementById('numberOrNull');
    selectNullOrNumber.addEventListener('change', ()=>{
      let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
      console.log(condition);
      let filtered = filterDatanull(dataInjuries, condition);
      showDataSelect.innerHTML='';
      filtered.forEach(element =>{
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Freight_Vessel} people injured by this type of accident.</li>`
      })
    })
  })
  //
  document.getElementById('sub-category-1-2').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{ 
    document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && data.arrayWaterVesselRelated){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayWaterVesselRelated[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water_Vessel_Related} people injured by this type of accident.</li>` 
})
});
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water_Vessel_Related} people injured by this type of accident.</li>`
    })
  })
})
 //
 document.getElementById('sub-category-1-3').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{ 
  document.getElementById('showDataSelect').innerHTML = '';
const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && data.arrayNotRelatedToVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayNotRelatedToVessel[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties} people injured by this type of accident.</li>`
  })
})
})
//
document.getElementById('sub-category-1-4').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{ 
  document.getElementById('showDataSelect').innerHTML = '';
const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && data.arrayWater){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayWater[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Water} people injured by this type of accident.</li>`
  })
})
})
//
document.getElementById('sub-category-1-5').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{ 
  document.getElementById('showDataSelect').innerHTML = '';
const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && data.arrayRecreationalBoating){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayRecreationalBoating[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Recreational_Boating} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Recreational_Boating} people injured by this type of accident.</li>`
  })
})
})
//
document.getElementById('sub-category-1-6').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{ 
  document.getElementById('showDataSelect').innerHTML = '';
const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && data.arrayPassengerVessel){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${data.arrayPassengerVessel[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Vessel} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Vessel} people injured by this type of accident.</li>`
  })
})
})
});
//*----------------------------------------------------------------------------------------------------
const dataAir = totalOfInjuriesInAir(dataInjuries);
const resultSumCategoryAir = sumByCategoryAverageAir;
const resultAverageCategoryAir = resultCategoryAverageAir;
const resultMedianCategoryAir = resultMediancategoryAverageAir;
const resultMinNumberCategoryAir = resultNumMinCategoryAir;
const resultMaxNumberCategoryAir = resultNumHighCategoryAir;
const showTypeAccidentsAir = document.getElementById('accidents_air').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryAir}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryAir}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryAir}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryAir}</b> and corresponds to the subcategory:  <b>Injured Persons On Air</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryAir}</b> and corresponds to the subcategory:  <b>Injured Persons On US Air Carrier</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-2-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Air`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-2-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons General Aviation`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-2-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons On Demand Air Taxi`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-2-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons US Air Carrier`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
  //
  document.getElementById('sub-category-2-1').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataAir.arrayAir){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataAir.arrayAir[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Air} people injured by this type of accident.</li>` 
})
});
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Air} people injured by this type of accident.</li>`
    })
  })
})
 //
 document.getElementById('sub-category-2-2').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataAir.arrayGeneralAviation){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataAir.arrayGeneralAviation[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_General_Aviation} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_General_Aviation} people injured by this type of accident.</li>`
  })
})
})
 //
 document.getElementById('sub-category-2-3').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataAir.arrayOnDemandAir){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataAir.arrayOnDemandAir[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_On_Demand_Air_Taxi} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_On_Demand_Air_Taxi} people injured by this type of accident.</li>`
  })
})
})
 //
 document.getElementById('sub-category-2-4').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataAir.arrayUSAirCarrier){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataAir.arrayUSAirCarrier[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_US_Air_Carrier} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_US_Air_Carrier} people injured by this type of accident.</li>`
  })
})
})
});
//*--------------------------------------------------------------------------------------------------
const dataPedestrian = totalOfInjuriesInPedestrians(dataInjuries);
const resultSumCategoryPedestrians = sumByCategoryAveragePedestrians;
const resultAverageCategoryPedestrians = resultCategoryAveragePedestrians;
const resultMedianCategoryPedestrians = resultMediancategoryAveragePedestrians;
const resultMinNumberCategoryPedestrians = resultNumMinCategoryPedestrians;
const resultMaxNumberCategoryPedestrians = resultNumHighCategoryPedestrians;
const showTypeAccidentsPedestrians = document.getElementById('accidents_pedestrian').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryPedestrians}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryPedestrians}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryPedestrians}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryPedestrians}</b> and corresponds to the subcategory:  <b>Injured Persons Pedestrians</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryPedestrians}</b> and corresponds to the subcategory:  <b>Injured Persons Pedestrians</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-3-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Pedestrians`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1); 
   //
 document.getElementById('sub-category-3-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPedestrian.arrayPedestrians){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPedestrian.arrayPedestrians[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pedestrians} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pedestrians} people injured by this type of accident.</li>`
  })
})
}) 
});
const dataHighway = totalOfInjuriesInHighway(dataInjuries);
const resultSumCategoryHighway = sumByCategoryAverageHighway;
const resultAverageCategoryHighway = resultCategoryAverageHighway;
const resultMedianCategoryHighway = resultMediancategoryAverageHighway;
const resultMinNumberCategoryHighway = resultNumMinCategoryHighway;
const resultMaxNumberCategoryHighway = resultNumHighCategoryHighway;
const showTypeAccidentsHighway = document.getElementById('accidents_highway').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryHighway}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryHighway}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryHighway}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryHighway}</b> and corresponds to the subcategory:  <b>Injured Persons On Highway Rail Grade Crossing</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryHighway}</b> and corresponds to the subcategory:  <b>Injured Persons On Highway</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-4-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Highway`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-4-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons Highway Rail Grade Crossing`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-4-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons Highway Rail Grade Crossing Railroads`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-4-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons Truck Occupants Large`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
  //
  const li5 = document.createElement('li');
  li5.setAttribute('id', 'sub-category-4-5');
  const button5 = document.createElement('button');
  button5.classList.add('buttonbylink');
  const buttontext5 = document.createTextNode(`Injured Persons Truck Occupants Light`);
  ulListSubCategory.appendChild(li5);
  li5.appendChild(button5);
  button5.appendChild(buttontext5);
  //
 document.getElementById('sub-category-4-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataHighway.arrayHighway){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayHighway[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway} people injured by this type of accident.</li>`
  })
})
})
     //
 document.getElementById('sub-category-4-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataHighway.arrayHighway){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayHighway[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway} people injured by this type of accident.</li>`
  })
})
})
     //
     document.getElementById('sub-category-4-2').addEventListener('click' , () =>{
      const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
    ShowButtonShowData.classList.add('show'); 
    document.getElementById('show-data-subcategory').addEventListener('click', () =>{
      document.getElementById('showDataSelect').innerHTML = '';
      const showDataMoreFilter = document.getElementById('show-data-more-filter');
    showDataMoreFilter.classList.add('show');
    const showAllGruop = document.getElementById('showDataSelect');
    showAllGruop.classList.add('show');
    const filterYearid = document.getElementById('filterYear');
    document.getElementById('filterYear').innerHTML = '';
    const selectAll = document.createElement('option');
    const selectAllText = document.createTextNode('Show All');
    selectAll.appendChild(selectAllText); 
    filterYearid.appendChild(selectAll);   
    for(i in data.arrayYear){
      document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
    }
    for(i in data.arrayYear && dataHighway.arrayHighwayRailGradeCrossing){
        document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayHighwayRailGradeCrossing[i]} people injured by this type of accident.</li>`
      }
    })
    const selectYear = document.getElementById('filterYear');
    selectYear.addEventListener('change', () => {
      let condition = selectYear.options[selectYear.selectedIndex].text;
      let filtered = filterData(dataInjuries, condition);
      showDataSelect.innerHTML = '';
      filtered.forEach(element => {
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway_Rail_Grade_Crossing} people injured by this type of accident.</li>` 
    })
    });
    const selectNullOrNumber = document.getElementById('numberOrNull');
    selectNullOrNumber.addEventListener('change', ()=>{
      let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
      console.log(condition);
      let filtered = filterDatanull(dataInjuries, condition);
      showDataSelect.innerHTML='';
      filtered.forEach(element =>{
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway_Rail_Grade_Crossing} people injured by this type of accident.</li>`
      })
    })
    }) 
     //
     document.getElementById('sub-category-4-3').addEventListener('click' , () =>{
      const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
    ShowButtonShowData.classList.add('show');
    document.getElementById('show-data-subcategory').addEventListener('click', () =>{
      document.getElementById('showDataSelect').innerHTML = '';
      const showDataMoreFilter = document.getElementById('show-data-more-filter');
    showDataMoreFilter.classList.add('show');
    const showAllGruop = document.getElementById('showDataSelect');
    showAllGruop.classList.add('show');
    const filterYearid = document.getElementById('filterYear');
    document.getElementById('filterYear').innerHTML = '';
    const selectAll = document.createElement('option');
    const selectAllText = document.createTextNode('Show All');
    selectAll.appendChild(selectAllText); 
    filterYearid.appendChild(selectAll);   
    for(i in data.arrayYear){
      document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
    }
    for(i in data.arrayYear && dataHighway.arrayHighwayRailGradeCrossingRailroads){
        document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayHighwayRailGradeCrossingRailroads[i]} people injured by this type of accident.</li>`
      }
    })
    const selectYear = document.getElementById('filterYear');
    selectYear.addEventListener('change', () => {
      let condition = selectYear.options[selectYear.selectedIndex].text;
      let filtered = filterData(dataInjuries, condition);
      showDataSelect.innerHTML = '';
      filtered.forEach(element => {
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads} people injured by this type of accident.</li>` 
    })
    });
    const selectNullOrNumber = document.getElementById('numberOrNull');
    selectNullOrNumber.addEventListener('change', ()=>{
      let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
      console.log(condition);
      let filtered = filterDatanull(dataInjuries, condition);
      showDataSelect.innerHTML='';
      filtered.forEach(element =>{
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads} people injured by this type of accident.</li>`
      })
    })
    })
     //
     document.getElementById('sub-category-4-4').addEventListener('click' , () =>{
      const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
    ShowButtonShowData.classList.add('show');
    document.getElementById('show-data-subcategory').addEventListener('click', () =>{
      document.getElementById('showDataSelect').innerHTML = '';
      const showDataMoreFilter = document.getElementById('show-data-more-filter');
    showDataMoreFilter.classList.add('show');
    const showAllGruop = document.getElementById('showDataSelect');
    showAllGruop.classList.add('show');
    const filterYearid = document.getElementById('filterYear');
    document.getElementById('filterYear').innerHTML = '';
    const selectAll = document.createElement('option');
    const selectAllText = document.createTextNode('Show All');
    selectAll.appendChild(selectAllText); 
    filterYearid.appendChild(selectAll);   
    for(i in data.arrayYear){
      document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
    }
    for(i in data.arrayYear && dataHighway.arrayTruckOccupantsLarge){
        document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayTruckOccupantsLarge[i]} people injured by this type of accident.</li>`
      }
    })
    const selectYear = document.getElementById('filterYear');
    selectYear.addEventListener('change', () => {
      let condition = selectYear.options[selectYear.selectedIndex].text;
      let filtered = filterData(dataInjuries, condition);
      showDataSelect.innerHTML = '';
      filtered.forEach(element => {
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Truck_Occupants_Large} people injured by this type of accident.</li>` 
    })
    });
    const selectNullOrNumber = document.getElementById('numberOrNull');
    selectNullOrNumber.addEventListener('change', ()=>{
      let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
      console.log(condition);
      let filtered = filterDatanull(dataInjuries, condition);
      showDataSelect.innerHTML='';
      filtered.forEach(element =>{
        showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Truck_Occupants_Large} people injured by this type of accident.</li>`
      })
    })
    })  
         //
         document.getElementById('sub-category-4-5').addEventListener('click' , () =>{
          const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
        ShowButtonShowData.classList.add('show');
        document.getElementById('show-data-subcategory').addEventListener('click', () =>{
          document.getElementById('showDataSelect').innerHTML = '';
          const showDataMoreFilter = document.getElementById('show-data-more-filter');
        showDataMoreFilter.classList.add('show');
        const showAllGruop = document.getElementById('showDataSelect');
        showAllGruop.classList.add('show');
        const filterYearid = document.getElementById('filterYear');
        document.getElementById('filterYear').innerHTML = '';
        const selectAll = document.createElement('option');
        const selectAllText = document.createTextNode('Show All');
        selectAll.appendChild(selectAllText); 
        filterYearid.appendChild(selectAll);   
        for(i in data.arrayYear){
          document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
        }
        for(i in data.arrayYear && dataHighway.arrayTruckOccupantsLight){
            document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataHighway.arrayTruckOccupantsLight[i]} people injured by this type of accident.</li>`
          }
        })
        const selectYear = document.getElementById('filterYear');
        selectYear.addEventListener('change', () => {
          let condition = selectYear.options[selectYear.selectedIndex].text;
          let filtered = filterData(dataInjuries, condition);
          showDataSelect.innerHTML = '';
          filtered.forEach(element => {
            showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Truck_Occupants_Light} people injured by this type of accident.</li>` 
        })
        });
        const selectNullOrNumber = document.getElementById('numberOrNull');
        selectNullOrNumber.addEventListener('change', ()=>{
          let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
          console.log(condition);
          let filtered = filterDatanull(dataInjuries, condition);
          showDataSelect.innerHTML='';
          filtered.forEach(element =>{
            showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Truck_Occupants_Light} people injured by this type of accident.</li>`
          })
        })
        })  
});
const dataWork = totalOfInjuriesInWork(dataInjuries);
const resultSumCategoryWork = sumByCategoryAverageWork;
const resultAverageCategoryWork = resultCategoryAverageWork;
const resultMedianCategoryWork = resultMediancategoryAverageWork;
const resultMinNumberCategoryWork = resultNumMinCategoryWork;
const resultMaxNumberCategoryWork = resultNumHighCategoryWork;
const showTypeAccidentsWork = document.getElementById('accidents_employee').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryWork}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryWork}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryWork}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryWork}</b> and corresponds to the subcategory:  <b>Injured Persons In Works Accidents</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryWork}</b> and corresponds to the subcategory:  <b>Injured Persons In Works Accidents </b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-5-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Employee Or Worker`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
        //
        document.getElementById('sub-category-5-1').addEventListener('click' , () =>{
          const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
        ShowButtonShowData.classList.add('show');
        document.getElementById('show-data-subcategory').addEventListener('click', () =>{
          document.getElementById('showDataSelect').innerHTML = '';
          const showDataMoreFilter = document.getElementById('show-data-more-filter');
        showDataMoreFilter.classList.add('show');
        const showAllGruop = document.getElementById('showDataSelect');
        showAllGruop.classList.add('show');
        const filterYearid = document.getElementById('filterYear');
        document.getElementById('filterYear').innerHTML = '';
        const selectAll = document.createElement('option');
        const selectAllText = document.createTextNode('Show All');
        selectAll.appendChild(selectAllText); 
        filterYearid.appendChild(selectAll);   
        for(i in data.arrayYear){
          document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
        }
        for(i in data.arrayYear && dataWork.arrayWork){
            document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataWork.arrayWork[i]} people injured by this type of accident.</li>`
          }
        })
        const selectYear = document.getElementById('filterYear');
        selectYear.addEventListener('change', () => {
          let condition = selectYear.options[selectYear.selectedIndex].text;
          let filtered = filterData(dataInjuries, condition);
          showDataSelect.innerHTML = '';
          filtered.forEach(element => {
            showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Employee_Or_Worker} people injured by this type of accident.</li>` 
        })
        });
        const selectNullOrNumber = document.getElementById('numberOrNull');
        selectNullOrNumber.addEventListener('change', ()=>{
          let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
          console.log(condition);
          let filtered = filterDatanull(dataInjuries, condition);
          showDataSelect.innerHTML='';
          filtered.forEach(element =>{
            showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Employee_Or_Worker} people injured by this type of accident.</li>`
          })
        })
        })
});
const dataRaliway = totalOfInjuriesInRailway(dataInjuries);
const resultSumCategoryRailway = sumByCategoryAverageRailway;
const resultAverageCategoryRailway = resultCategoryAverageRailway;
const resultMedianCategoryRailway = resultMediancategoryAverageRailway;
const resultMinNumberCategoryRailway = resultNumMinCategoryRailway;
const resultMaxNumberCategoryRailway = resultNumHighCategoryRailway;
const showTypeAccidentsRailway = document.getElementById('accidents_railway').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryRailway}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryRailway}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryRailway}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryRailway}</b> and corresponds to the subcategory:  <b>Injured Persons On Railroad Train Accidents</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryRailway}</b> and corresponds to the subcategory:  <b>Injured Persons In Railroad Alones </b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-6-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Rail`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-6-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons Rail Freight`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-6-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons Rail Freight Highway Rail Grade Crossing`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-6-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons Rail Freight Other Incidents`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
  //
  const li5 = document.createElement('li');
  li5.setAttribute('id', 'sub-category-6-5');
  const button5 = document.createElement('button');
  button5.classList.add('buttonbylink');
  const buttontext5 = document.createTextNode(`Injured Persons Rail Freight Train Accidents`);
  ulListSubCategory.appendChild(li5);
  li5.appendChild(button5);
  button5.appendChild(buttontext5);
   //
   const li6 = document.createElement('li');
   li6.setAttribute('id', 'sub-category-6-6');
   const button6 = document.createElement('button');
   button6.classList.add('buttonbylink');
   const buttontext6 = document.createTextNode(`Injured Persons Rail Freight Trespassers`);
   ulListSubCategory.appendChild(li6);
   li6.appendChild(button6);
   button6.appendChild(buttontext6);
    //
  const li7 = document.createElement('li');
  li7.setAttribute('id', 'sub-category-6-7');
  const button7 = document.createElement('button');
  button7.classList.add('buttonbylink');
  const buttontext7 = document.createTextNode(`Injured Persons Rail Road Trespassers`);
  ulListSubCategory.appendChild(li7);
  li7.appendChild(button7);
  button7.appendChild(buttontext7);
   //
   const li8 = document.createElement('li');
   li8.setAttribute('id', 'sub-category-6-8');
   const button8 = document.createElement('button');
   button8.classList.add('buttonbylink');
   const buttontext8 = document.createTextNode(`Injured Persons Railroad`);
   ulListSubCategory.appendChild(li8);
   li8.appendChild(button8);
   button8.appendChild(buttontext8);
    //
  const li9 = document.createElement('li');
  li9.setAttribute('id', 'sub-category-6-9');
  const button9 = document.createElement('button');
  button9.classList.add('buttonbylink');
  const buttontext9 = document.createTextNode(`Injured Persons Railroad Alone`);
  ulListSubCategory.appendChild(li9);
  li9.appendChild(button9);
  button9.appendChild(buttontext9);
  //
  const li10 = document.createElement('li');
  li10.setAttribute('id', 'sub-category-6-10');
  const button10 = document.createElement('button');
  button10.classList.add('buttonbylink');
  const buttontext10 = document.createTextNode(`Injured Persons Railroad Train Accidents`);
  ulListSubCategory.appendChild(li10);
  li10.appendChild(button10);
  button10.appendChild(buttontext10);
  //
  const li11 = document.createElement('li');
  li11.setAttribute('id', 'sub-category-6-11');
  const button11 = document.createElement('button');
  button11.classList.add('buttonbylink');
  const buttontext11 = document.createTextNode(`Injured Persons Other Incidents Railroads`);
  ulListSubCategory.appendChild(li11);
  li11.appendChild(button11);
  button11.appendChild(buttontext11);
  //
  const li12 = document.createElement('li');
  li12.setAttribute('id', 'sub-category-6-12');
  const button12 = document.createElement('button');
  button12.classList.add('buttonbylink');
  const buttontext12 = document.createTextNode(`Injured Persons Train Accidents Rail Roads`);
  ulListSubCategory.appendChild(li12);
  li12.appendChild(button12);
  button12.appendChild(buttontext12);
   //
   const li13 = document.createElement('li');
   li13.setAttribute('id', 'sub-category-6-13');
   const button13 = document.createElement('button');
   button13.classList.add('buttonbylink');
   const buttontext13 = document.createTextNode(`Injured Persons Transit Rail`);
   ulListSubCategory.appendChild(li13);
   li13.appendChild(button13);
   button13.appendChild(buttontext13);
//        
document.getElementById('sub-category-6-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayOtherIncidentsRailroads){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayOtherIncidentsRailroads[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incidents_Railroads} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incidents_Railroads} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-2').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRail){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRail[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-3').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailFreight){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailFreight[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-4').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailFreightHighwayRailGradeCrossing){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailFreightHighwayRailGradeCrossing[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-5').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailFreightOtherIncidents){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailFreightOtherIncidents[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Other_Incidents} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Other_Incidents} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-6').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailFreightTrainAccidents){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailFreightTrainAccidents[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Train_Accidents} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Train_Accidents} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-7').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailFreightTrespassers){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailFreightTrespassers[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Trespassers} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Freight_Trespassers} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-8').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailRoadTrespassers){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailRoadTrespassers[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Road_Trespassers} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Rail_Road_Trespassers} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-9').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailroad){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailroad[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-10').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailroadAlones){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailroadAlones[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad_Alone} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad_Alone} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-6-11').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataRaliway.arrayRailroadTrainAccidents){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataRaliway.arrayRailroadTrainAccidents[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad_Train_Accidents} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Railroad_Train_Accidents} people injured by this type of accident.</li>`
  })
})
})
});
const dataPublicTransport = totalOfInjuriesInPublicTransport(dataInjuries);
const resultSumCategoryPublicTransport = sumByCategoryAveragePublicTransport;
const resultAverageCategoryPublicTransport = resultCategoryAveragePublicTransport;
const resultMedianCategoryPublicTransport = resultMediancategoryAveragePublicTransport;
const resultMinNumberCategoryPublicTransport = resultNumMinCategoryPublicTransport;
const resultMaxNumberCategoryPublicTransport = resultNumHighCategoryPublicTransport;
const showTypeAccidentsPublicTransport = document.getElementById('accidents_publicTransportation').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryPublicTransport}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryPublicTransport}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryPublicTransport}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryPublicTransport}</b> and corresponds to the subcategory:  <b>Injured Persons Passenger Car Occupants</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryPublicTransport}</b> and corresponds to the subcategory:  <b>Injured Persons Pedalcyclists</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-7-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Bus Occupants`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-7-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons Motorcyclists`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-7-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons Passenger Car Occupants`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-7-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons Pedalcyclists`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
//        
document.getElementById('sub-category-7-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPublicTransport.arrayBusOccupants){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPublicTransport.arrayBusOccupants[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Bus_Occupants} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Bus_Occupants} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-7-2').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPublicTransport.arrayMotorcyclists){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPublicTransport.arrayMotorcyclists[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Motorcyclists} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Motorcyclists} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-7-3').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPublicTransport.arrayPassengerCarOccupants){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPublicTransport.arrayPassengerCarOccupants[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Car_Occupants} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Car_Occupants} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-7-4').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPublicTransport.arrayPedalcyclists){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPublicTransport.arrayPedalcyclists[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pedalcyclists} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pedalcyclists} people injured by this type of accident.</li>`
  })
})
})
});
const dataPipeline = totalOfInjuriesInPipeline(dataInjuries);
const resultSumCategoryPipeline = sumByCategoryAveragePipeline;
const resultAverageCategoryPipeline = resultCategoryAveragePipeline;
const resultMedianCategoryPipeline = resultMediancategoryAveragePipeline;
const resultMinNumberCategoryPipeline = resultNumMinCategoryPipeline;
const resultMaxNumberCategoryPipeline = resultNumHighCategoryPipeline;
const showTypeAccidentsPipeline = document.getElementById('accidents_pipelines').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryPipeline}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryPipeline}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryPipeline}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryPipeline}</b> and corresponds to the subcategory:  <b>Injured Persons Passenger Car Occupants</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryPipeline}</b> and corresponds to the subcategory:  <b>Injured Persons Pedalcyclists</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-8-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Gas Pipeline`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-8-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons Hazardous Liquid Pipeline`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-8-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons Pipeline`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
//        
document.getElementById('sub-category-8-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPipeline.arrayGasPipeline){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPipeline.arrayGasPipeline[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Gas_Pipeline} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Gas_Pipeline} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-8-2').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPipeline.arrayHazardousLiquidPipeline){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPipeline.arrayHazardousLiquidPipeline[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Hazardous_Liquid_Pipeline} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Hazardous_Liquid_Pipeline} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-8-3').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataPipeline.arrayPipeline){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataPipeline.arrayPipeline[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pipeline} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Pipeline} people injured by this type of accident.</li>`
  })
})
})
});
const dataOther = totalOfInjuriesInOther(dataInjuries);
const resultSumCategoryOther = sumByCategoryAverageOther;
const resultAverageCategoryOther = resultCategoryAverageOther;
const resultMedianCategoryOther = resultMediancategoryAverageOther;
const resultMinNumberCategoryOther = resultNumMinCategoryOther;
const resultMaxNumberCategoryOther = resultNumHighCategoryOther;
const showTypeAccidentsOther = document.getElementById('accidents_others').addEventListener('click', () =>{
  const dataCalculationsByType = document.getElementById('dataCalculationsByType');
  dataCalculationsByType.classList.add('show');
  const testExample = document.getElementById('instrucction_ghost');
  testExample.classList.add('hide');
  document.getElementById('totalSumCategory').innerHTML = '';
  document.getElementById('totalSumCategory').innerHTML += `<i class="far fa-circle"></i><span>People injured from 1960 to 2016 : <b>${resultSumCategoryOther}</b></span>`;
  document.getElementById('totalAveregeCategory').innerHTML = '';
  document.getElementById('totalAveregeCategory').innerHTML += `<i class="far fa-circle"></i><span>Average of injuries from 1960 to 2016: <b>${resultAverageCategoryOther}</b></span>`;
  document.getElementById('totalMedianCategory').innerHTML = '';
  document.getElementById('totalMedianCategory').innerHTML += `<i class="far fa-circle"></i><span>Arithmetic median of the wounded people from 1960 to 2016: <b>${resultMedianCategoryOther}</b></span>`;
  document.getElementById('totalNumMinCategory').innerHTML = '';
  document.getElementById('totalNumMinCategory').innerHTML += `<i class="far fa-circle"></i><span>The least number of injuries between 1960 and 2016: <b>${resultMinNumberCategoryOther}</b> and corresponds to the subcategory:  <b>Injured Persons Passenger Car Occupants</b></span> `;
  document.getElementById('totalNumMaxCategory').innerHTML = '';
  document.getElementById('totalNumMaxCategory').innerHTML += `<i class="far fa-circle"></i><span>The largest number of injured between 1960 and 2016: <b>${resultMaxNumberCategoryOther}</b> and corresponds to the subcategory:  <b>Injured Persons Pedalcyclists</b></span>`;
  const titleSelect = document.getElementById('list-select');
  titleSelect.classList.add('show');
  const ulListSubCategory = document.getElementById('list-sub-category');
  ulListSubCategory.innerHTML = '';
  const li1 = document.createElement('li');
  li1.setAttribute('id', 'sub-category-9-1');
  const button1 = document.createElement('button');
  button1.classList.add('buttonbylink');
  const buttontext1 = document.createTextNode(`Injured Persons Commuter Carrier`);
  ulListSubCategory.appendChild(li1);
  li1.appendChild(button1);
  button1.appendChild(buttontext1);
  //
  const li2 = document.createElement('li');
  li2.setAttribute('id', 'sub-category-9-2');
  const button2 = document.createElement('button');
  button2.classList.add('buttonbylink');
  const buttontext2 = document.createTextNode(`Injured Persons Industrial Or Other`);
  ulListSubCategory.appendChild(li2);
  li2.appendChild(button2);
  button2.appendChild(buttontext2);
  //
  const li3 = document.createElement('li');
  li3.setAttribute('id', 'sub-category-9-3');
  const button3 = document.createElement('button');
  button3.classList.add('buttonbylink');
  const buttontext3 = document.createTextNode(`Injured Persons Other Counts`);
  ulListSubCategory.appendChild(li3);
  li3.appendChild(button3);
  button3.appendChild(buttontext3);
  //
  const li4 = document.createElement('li');
  li4.setAttribute('id', 'sub-category-9-4');
  const button4 = document.createElement('button');
  button4.classList.add('buttonbylink');
  const buttontext4 = document.createTextNode(`Injured Persons Other Incident`);
  ulListSubCategory.appendChild(li4);
  li4.appendChild(button4);
  button4.appendChild(buttontext4);
  //
  const li5 = document.createElement('li');
  li5.setAttribute('id', 'sub-category-9-5');
  const button5 = document.createElement('button');
  button5.classList.add('buttonbylink');
  const buttontext5 = document.createTextNode(`Injured Persons Other Incident Transit`);
  ulListSubCategory.appendChild(li5);
  li5.appendChild(button5);
  button5.appendChild(buttontext5);
  //
  const li6 = document.createElement('li');
  li6.setAttribute('id', 'sub-category-9-6');
  const button6 = document.createElement('button');
  button6.classList.add('buttonbylink');
  const buttontext6 = document.createTextNode(`Injured Persons Other Incidents`);
  ulListSubCategory.appendChild(li6);
  li6.appendChild(button6);
  button6.appendChild(buttontext6);
  //
  const li7 = document.createElement('li');
  li7.setAttribute('id', 'sub-category-9-7');
  const button7 = document.createElement('button');
  button7.classList.add('buttonbylink');
  const buttontext7 = document.createTextNode(`Injured Persons Passenger Or Occupant`);
  ulListSubCategory.appendChild(li7);
  li7.appendChild(button7);
  button7.appendChild(buttontext7);
  //
  const li8 = document.createElement('li');
  li8.setAttribute('id', 'sub-category-9-8');
  const button8 = document.createElement('button');
  button8.classList.add('buttonbylink');
  const buttontext8 = document.createTextNode(`Injured Persons Transit Non Rail`);
  ulListSubCategory.appendChild(li8);
  li8.appendChild(button8);
  button8.appendChild(buttontext8);
  //
  const li9 = document.createElement('li');
  li9.setAttribute('id', 'sub-category-9-9');
  const button9 = document.createElement('button');
  button9.classList.add('buttonbylink');
  const buttontext9 = document.createTextNode(`Injured Persons Transit Total`);
  ulListSubCategory.appendChild(li9);
  li9.appendChild(button9);
  button9.appendChild(buttontext9);
  //
  const li10 = document.createElement('li');
  li10.setAttribute('id', 'sub-category-9-10');
  const button10 = document.createElement('button');
  button10.classList.add('buttonbylink');
  const buttontext10 = document.createTextNode(`Injured Persons Trespassers`);
  ulListSubCategory.appendChild(li10);
  li10.appendChild(button10);
  button10.appendChild(buttontext10);
  //        
document.getElementById('sub-category-9-1').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataOther.arrayCommuterCarrierOther){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayCommuterCarrierOther[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Commuter_Carrier} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Commuter_Carrier} people injured by this type of accident.</li>`
  })
})
})
  //        
  document.getElementById('sub-category-9-2').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataOther.arrayIndustrialOrOther){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayIndustrialOrOther[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Industrial_Or_Other} people injured by this type of accident.</li>` 
  })
  });
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Industrial_Or_Other} people injured by this type of accident.</li>`
    })
  })
  })
  //        
  document.getElementById('sub-category-9-3').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataOther.arrayOtherCounts){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayOtherCounts[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Counts} people injured by this type of accident.</li>` 
  })
  });
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Counts} people injured by this type of accident.</li>`
    })
  })
  })
  //        
  document.getElementById('sub-category-9-4').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataOther.arrayOtherIncident){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayOtherIncident[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incident} people injured by this type of accident.</li>` 
  })
  });
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incident} people injured by this type of accident.</li>`
    })
  })
  })
  //        
  document.getElementById('sub-category-9-5').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataOther.arrayOtherIncidentTransit){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayOtherIncidentTransit[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incident_Transit} people injured by this type of accident.</li>` 
  })
  });
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incident_Transit} people injured by this type of accident.</li>`
    })
  })
  })
  //        
  document.getElementById('sub-category-9-6').addEventListener('click' , () =>{
    const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
  ShowButtonShowData.classList.add('show');
  document.getElementById('show-data-subcategory').addEventListener('click', () =>{
    document.getElementById('showDataSelect').innerHTML = '';
    const showDataMoreFilter = document.getElementById('show-data-more-filter');
  showDataMoreFilter.classList.add('show');
  const showAllGruop = document.getElementById('showDataSelect');
  showAllGruop.classList.add('show');
  const filterYearid = document.getElementById('filterYear');
  document.getElementById('filterYear').innerHTML = '';
  const selectAll = document.createElement('option');
  const selectAllText = document.createTextNode('Show All');
  selectAll.appendChild(selectAllText); 
  filterYearid.appendChild(selectAll);   
  for(i in data.arrayYear){
    document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
  }
  for(i in data.arrayYear && dataOther.arrayOtherIncidents){
      document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayOtherIncidents[i]} people injured by this type of accident.</li>`
    }
  })
  const selectYear = document.getElementById('filterYear');
  selectYear.addEventListener('change', () => {
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let filtered = filterData(dataInjuries, condition);
    showDataSelect.innerHTML = '';
    filtered.forEach(element => {
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incidents} people injured by this type of accident.</li>` 
  })
  });
  const selectNullOrNumber = document.getElementById('numberOrNull');
  selectNullOrNumber.addEventListener('change', ()=>{
    let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
    console.log(condition);
    let filtered = filterDatanull(dataInjuries, condition);
    showDataSelect.innerHTML='';
    filtered.forEach(element =>{
      showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Other_Incidents} people injured by this type of accident.</li>`
    })
  })
  })
//        
document.getElementById('sub-category-9-7').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataOther.arrayPassengerOrOccupant){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayPassengerOrOccupant[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Or_Occupant} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Passenger_Or_Occupant} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-9-8').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataOther.arrayTransitNonRail){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayTransitNonRail[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Transit_Non_Rail} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Transit_Non_Rail} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-9-9').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataOther.arrayTransitTotal){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayTransitTotal[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Transit_Total} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Transit_Total} people injured by this type of accident.</li>`
  })
})
})
//        
document.getElementById('sub-category-9-10').addEventListener('click' , () =>{
  const ShowButtonShowData = document.getElementById('showDataCompleteByCategory');
ShowButtonShowData.classList.add('show');
document.getElementById('show-data-subcategory').addEventListener('click', () =>{
  document.getElementById('showDataSelect').innerHTML = '';
  const showDataMoreFilter = document.getElementById('show-data-more-filter');
showDataMoreFilter.classList.add('show');
const showAllGruop = document.getElementById('showDataSelect');
showAllGruop.classList.add('show');
const filterYearid = document.getElementById('filterYear');
document.getElementById('filterYear').innerHTML = '';
const selectAll = document.createElement('option');
const selectAllText = document.createTextNode('Show All');
selectAll.appendChild(selectAllText); 
filterYearid.appendChild(selectAll);   
for(i in data.arrayYear){
  document.getElementById('filterYear').innerHTML += `<option>${data.arrayYear[i]}</option>`
}
for(i in data.arrayYear && dataOther.arrayTrespassers){
    document.getElementById('showDataSelect').innerHTML += `<li>On the date ${data.arrayYear[i]} there were ${dataOther.arrayTrespassers[i]} people injured by this type of accident.</li>`
  }
})
const selectYear = document.getElementById('filterYear');
selectYear.addEventListener('change', () => {
  let condition = selectYear.options[selectYear.selectedIndex].text;
  let filtered = filterData(dataInjuries, condition);
  showDataSelect.innerHTML = '';
  filtered.forEach(element => {
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Trespassers} people injured by this type of accident.</li>` 
})
});
const selectNullOrNumber = document.getElementById('numberOrNull');
selectNullOrNumber.addEventListener('change', ()=>{
  let condition = selectNullOrNumber.options[selectNullOrNumber.selectedIndex].text;
  console.log(condition);
  let filtered = filterDatanull(dataInjuries, condition);
  showDataSelect.innerHTML='';
  filtered.forEach(element =>{
    showDataSelect.innerHTML += `<li>On the date ${element.Year} there were ${element.Total_Injured_Persons_Trespassers} people injured by this type of accident.</li>`
  })
})
})
});

