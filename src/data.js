const dataInjuries = INJURIES;
const selectYear = (dataInjuries) =>{
  let years = [];
  for (let i = 0; i<dataInjuries.length; i++){
    years.push(dataInjuries[i].Year)
  }
  return years;
}
window.selectYear = selectYear;
