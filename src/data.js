const dataInjuries = INJURIES; 
let groupAccidentsAcuatics = [];
let groupAccidentsAir = [];
let groupAccidentsPedestrian = [];
let groupAccidentsPipper = [];
let groupAccidentsOther = [];
let groupAccidentsHighway = [];
let groupAccidentsEmployee = [];
let groupAccidentsRailway = [];
let groupAccidentsPrivateVehicles = [];
for(let i=0; i<dataInjuries.length; i++){
  Object.keys(dataInjuries[i]).forEach(function(key) {
    console.log(`${key.replace(/_/g, " ")} ${dataInjuries[i][key]}`); 
});
};

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
}*/