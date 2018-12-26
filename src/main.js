const yearToFilter = selectYear(dataInjuries);
document.getElementById('year_list').innerHTML = '';
for (let i = 0; i < yearToFilter.length; i++){
    document.getElementById('year_list').innerHTML += '<option>' + String(yearToFilter[i]) + '</option>'; 
};
let optionSelect = document.getElementById('year_list');
  optionSelect.addEventListener('change',  function(){
    let selectedOption = this.options[optionSelect.selectedIndex];
    let optionValue = (selectedOption.text); 
    console.log(optionValue);
  });
const actionFilterToYear = document.getElementById('button_filter_year').addEventListener('click', (actionfilter) =>{
    const valueYear = selectYearToFilter(dataInjuries);
    document.getElementById('result_year_filtered').innerHTML = '<div>' + valueYear + '</div>';   
  });


 

