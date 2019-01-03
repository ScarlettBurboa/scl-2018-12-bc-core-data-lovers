const dataInjuries = INJURIES; 
let showAllData = (dataInjuries) =>{
  let newArr = [];
  for(let i=0; i<dataInjuries.length; i++){
    dataInjuries[i].filter();
    Object.keys(dataInjuries[i]).forEach(function(key) {
      newArr.push(`${key.replace(/_/g, " ")}: ${dataInjuries[i][key]}`); 
});
};
return newArr;
};
window.showAllData = showAllData; 
let showAccidentsAcuatics = (dataInjuries) =>{
  let showAcuatics = [];
  for(let i=0; i<dataInjuries.length; i++){
    showAcuatics.push(`dataInjuries[i].Total_Injured_Persons_Freight_Vessel}</div>
    ${dataInjuries[i].Total_Injured_Persons_Water_Vessel_Related}`);
    console.log(showAcuatics);
  }
  return showAcuatics;
}
window.showAccidentsAcuatics = showAccidentsAcuatics;
/*const selectYear = (dataInjuries) =>{ 
  let years = []; 
  for (let i = 0; i<dataInjuries.length; i++){
    years.push(dataInjuries[i].Year)
  }
  return years; 
}
window.selectYear = selectYear; 
let selectYearToFilter = (dataInjuries) =>{ 
const prueba = dataInjuries.filter(dataInjuries => {
    return (dataInjuries.Year) === selected;
});
console.log(prueba);
}
window.selectYearToFilter = selectYearToFilter;*/
/*const dataInjuries = INJURIES;
const showAllData = (dataInjuries) =>{
  let allData = [];
  for (let i=0; i<dataInjuries.length; i++){
    allData.push(dataInjuries[i])
  }
  return allData;
}
let groupAccidentsAir = [];
let groupAccidentsPedestrian = [];
let groupAccidentsPipper = [];
let groupAccidentsOther = [];
let groupAccidentsHighway = [];
let groupAccidentsEmployee = [];
let groupAccidentsRailway = [];
let groupAccidentsPrivateVehicles = [];*/