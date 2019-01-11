/**SE LLAMA A LA DATA Y SE GUARDA EN UNA CONSTANTE*/
const dataInjuries = INJURIES; 
/**PRIMER GRUPO AGRUPADO EN ARRAYS VACIOS PARA UNIRLOS EN UNA FUNCIÓN*/
const totalOfInjuriesInAccidents = (dataInjuries) =>{
  const newObjectAcumulator = {
    arrayYear: [],
    arrayFreightVessel: [],
    arrayWaterVesselRelated: [],
    arrayNotRelatedToVessel : [],
    arrayWater: [],
    arrayRecreationalBoating: [],
    arrayPassengerVessel: []
  }
 dataInjuries.forEach(element =>{
  newObjectAcumulator.arrayYear.push(element.Year);
  newObjectAcumulator.arrayFreightVessel.push(element.Total_Injured_Persons_Freight_Vessel);
  newObjectAcumulator.arrayWaterVesselRelated.push(element.Total_Injured_Persons_Water_Vessel_Related);
  newObjectAcumulator.arrayNotRelatedToVessel.push(element.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties);
  newObjectAcumulator.arrayWater.push(element.Total_Injured_Persons_Water);
  newObjectAcumulator.arrayRecreationalBoating.push(element.Total_Injured_Persons_Recreational_Boating);
  newObjectAcumulator.arrayPassengerVessel.push(element.Total_Injured_Persons_Passenger_Vessel);
  });
 return newObjectAcumulator;
}
window.totalOfInjuriesInAccidents = totalOfInjuriesInAccidents;
/**SUMA DE CADA UNA DE LAS SUBCATEGORIAS DE EL GRUPO ACCIDENTES EN AGUA*/
const functionTotal = totalOfInjuriesInAccidents(dataInjuries);
const sumAccidentsInfreightVessel = functionTotal.arrayFreightVessel.reduce((accumulator, currentValue) =>{ return accumulator + currentValue;});
const sumAccidentsWaterVesselRelated = functionTotal.arrayWaterVesselRelated.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsNotRelatedToVessel = functionTotal.arrayNotRelatedToVessel.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsInWater = functionTotal.arrayWater.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRecreationalBoating = functionTotal.arrayRecreationalBoating.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsPassengerVessel = functionTotal.arrayPassengerVessel.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsInfreightVessel = sumAccidentsInfreightVessel;
window.sumAccidentsWaterVesselRelated = sumAccidentsWaterVesselRelated;
window.sumAccidentsNotRelatedToVessel = sumAccidentsNotRelatedToVessel;
window.sumAccidentsInWater = sumAccidentsInWater;
window.sumAccidentsRecreationalBoating = sumAccidentsRecreationalBoating;
window.sumAccidentsPassengerVessel = sumAccidentsPassengerVessel;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageWater = [];
categoryAverageWater.push(sumAccidentsRecreationalBoating,sumAccidentsInfreightVessel,sumAccidentsPassengerVessel,sumAccidentsWaterVesselRelated,sumAccidentsNotRelatedToVessel,sumAccidentsInWater);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverage = categoryAverageWater.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageWater = (sumByCategoryAverage / categoryAverageWater.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageWater.sort((a, b) => a - b);
let lowMiddlecategoryAverageWater = Math.floor((categoryAverageWater.length - 1) / 2);
let highMiddlecategoryAverageWater = Math.ceil((categoryAverageWater.length - 1) / 2);
let resultMediancategoryAverageWater = ((categoryAverageWater[highMiddlecategoryAverageWater] + categoryAverageWater[lowMiddlecategoryAverageWater]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgerory = (categoryAverageWater) => {
  return Math.max.apply(null, categoryAverageWater)
};
const resultNumHighCategory = numHighCatgerory(categoryAverageWater);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgerory = (categoryAverageWater) =>{
  return Math.min.apply(null, categoryAverageWater);
};
const resultNumMinCategory = numMinCatgerory(categoryAverageWater);
window.sumByCategoryAverage = sumByCategoryAverage;
window.resultCategoryAverageWater = resultCategoryAverageWater;
window.resultMediancategoryAverageWater = resultMediancategoryAverageWater;
window.resultNumHighCategory = resultNumHighCategory;
window.resultNumMinCategory = resultNumMinCategory;
/** PROMEDIO DE CADA UNA DE LAS SUBCATEGORÍAS DE EL GRUPO EN ACCIDENTES EN AGUA*/
let promedyFreightVessel = (sumAccidentsInfreightVessel / functionTotal.arrayFreightVessel.length);
window.promedyFreightVessel = promedyFreightVessel;
let promedyWaterVesselRelated = (sumAccidentsWaterVesselRelated / functionTotal.arrayWaterVesselRelated.length);
window.promedyWaterVesselRelated = promedyWaterVesselRelated;
let promedyNotRelatedToVessel = (sumAccidentsNotRelatedToVessel / functionTotal.arrayNotRelatedToVessel.length);
window.promedyNotRelatedToVessel = promedyNotRelatedToVessel;
let promedyWater = (sumAccidentsInWater / functionTotal.arrayWater.length);
window.promedyWater = promedyWater;
let promedyRecreationalBoating = (sumAccidentsRecreationalBoating / functionTotal.arrayRecreationalBoating.length);
window.promedyRecreationalBoating = promedyRecreationalBoating;
let promedyPassengerVessel = (sumAccidentsPassengerVessel / functionTotal.arrayPassengerVessel);
window.promedyPassengerVessel = promedyPassengerVessel;
/**--------------------------------------------------------------------------------------------------------------- */
//MEDIANA DE CADA UNA DE LAS SUBCATEGORÍAS DE EL GRUPO EN ACCIDENTES EN AGUA*/
functionTotal.arrayFreightVessel.sort((a, b) => a - b);
let lowMiddleFreightVessel = Math.floor((functionTotal.arrayFreightVessel.length - 1) / 2);
let highMiddleFreightVessel = Math.ceil((functionTotal.arrayFreightVessel.length - 1) / 2);
let resultMedianFreightVessel = ((functionTotal.arrayFreightVessel[highMiddleFreightVessel] + functionTotal.arrayFreightVessel[lowMiddleFreightVessel]) / 2);
window.resultMedianFreightVessel = resultMedianFreightVessel;
functionTotal.arrayWaterVesselRelated.sort((a, b) => a - b);
let lowMiddleWaterVesselRelated = Math.floor((functionTotal.arrayWaterVesselRelated.length - 1) / 2);
let highMiddleWaterVesselRelated = Math.ceil((functionTotal.arrayWaterVesselRelated.length - 1) / 2);
let resultMedianWaterVesselRelated = ((functionTotal.arrayWaterVesselRelated[highMiddleWaterVesselRelated] + functionTotal.arrayWaterVesselRelated[lowMiddleWaterVesselRelated]) / 2);
window.resultMedianWaterVesselRelated = resultMedianWaterVesselRelated;
functionTotal.arrayNotRelatedToVessel.sort((a, b) => a - b);
let lowMiddleNotRelatedToVessel = Math.floor((functionTotal.arrayNotRelatedToVessel.length - 1) / 2);
let highMiddleNotRelatedToVessel = Math.ceil((functionTotal.arrayNotRelatedToVessel.length - 1) / 2);
let resultMedianNotRelatedToVessel = ((functionTotal.arrayNotRelatedToVessel[highMiddleNotRelatedToVessel] + functionTotal.arrayNotRelatedToVessel[lowMiddleNotRelatedToVessel]) / 2);
window.resultMedianNotRelatedToVessel = resultMedianNotRelatedToVessel;
functionTotal.arrayWater.sort((a, b) => a - b);
let lowMiddleWater = Math.floor((functionTotal.arrayWater.length - 1) / 2);
let highMiddleWater = Math.ceil((functionTotal.arrayWater.length - 1) / 2);
let resultMedianWater = ((functionTotal.arrayWater[highMiddleWater] + functionTotal.arrayWater[lowMiddleWater]) / 2);
window.resultMedianWater = resultMedianWater;
functionTotal.arrayRecreationalBoating.sort((a, b) => a - b);
let lowMiddleRecreationalBoating = Math.floor((functionTotal.arrayRecreationalBoating.length - 1) / 2);
let highMiddleRecreationalBoating = Math.ceil((functionTotal.arrayRecreationalBoating.length - 1) / 2);
let resultMedianRecreationalBoating = ((functionTotal.arrayRecreationalBoating[highMiddleRecreationalBoating] + functionTotal.arrayRecreationalBoating[lowMiddleRecreationalBoating]) / 2);
window.resultMedianRecreationalBoating = resultMedianRecreationalBoating;
functionTotal.arrayPassengerVessel.sort((a, b) => a - b);
let lowMiddlePassengerVessel = Math.floor((functionTotal.arrayPassengerVessel.length - 1) / 2);
let highMiddlePassengerVessel = Math.ceil((functionTotal.arrayPassengerVessel.length - 1) / 2);
let resultMedianPassengerVessel = ((functionTotal.arrayPassengerVessel[highMiddlePassengerVessel] + functionTotal.arrayPassengerVessel[lowMiddlePassengerVessel]) / 2);
window.resultMedianPassengerVessel = resultMedianPassengerVessel;
/**----------------------------------------------------------------------------------------------------------------------------------- */
//NÚMERO MAXIMO DE EL ARRAY EN CADA SUBCATEGORIA DEL GRUPO DE ACCIDENTES DE AGUA */
const newArrayYear = functionTotal.arrayYear;
window.newArrayYear = newArrayYear;
const newArrayFreightVessel = functionTotal.arrayFreightVessel;
const newArrayWaterVesselRelated = functionTotal.arrayWaterVesselRelated;
const newArrayNotRelatedToVessel = functionTotal.arrayNotRelatedToVessel;
const newArrayWater = functionTotal.arrayWater;
const newArrayRecreationalBoating = functionTotal.arrayRecreationalBoating;
const newArrayPassengerVessel = functionTotal.arrayPassengerVessel;
const numHighFreightVessel = (newArrayFreightVessel) => {
  return Math.max.apply(null, newArrayFreightVessel)
};
const numHighWaterVesselRelated = (newArrayWaterVesselRelated) =>{
   return Math.max.apply(null, newArrayWaterVesselRelated)
};
const numHigNotRelatedToVessel = (newArrayNotRelatedToVessel) =>{
  return Math.max.apply(null, newArrayNotRelatedToVessel)
};
const numHighWater = (newArrayWater) =>{
   return Math.max.apply(null, newArrayWater)
}
const numHighRecreationalBoating = (newArrayRecreationalBoating) =>{
  return Math.max.apply(null, newArrayRecreationalBoating)
}
const numHighPassengerVessel = (newArrayPassengerVessel) =>{
  return Math.max.apply(null, newArrayPassengerVessel)
}
const funnumHighFreightVessel = numHighFreightVessel(newArrayFreightVessel);
const funnumHighWaterVesselRelated  = numHighWaterVesselRelated(newArrayWaterVesselRelated);
const funnumHighNotRelatedToVessel = numHigNotRelatedToVessel(newArrayNotRelatedToVessel);
const funnumHighWater = numHighWater(newArrayWater);
const funnumHighRecreationalBoating = numHighRecreationalBoating(newArrayRecreationalBoating);
const funnumHighPassengerVessel = numHighPassengerVessel(newArrayPassengerVessel);
window.funnumHighFreightVessel = funnumHighFreightVessel;
window.funnumHighWaterVesselRelated = funnumHighWaterVesselRelated;
window.funnumHighNotRelatedToVessel = funnumHighNotRelatedToVessel;
window.funnumHighWater = funnumHighWater;
window.funnumHighRecreationalBoating = funnumHighRecreationalBoating;
window.funnumHighPassengerVessel = funnumHighPassengerVessel;
/****------------------------------------------------------------------------------------------------------------------- */
const numMinFreightVessel = (newArrayFreightVessel) =>{
  return Math.min.apply(null, newArrayFreightVessel);
};
const numMinWaterVesselRelated = (newArrayWaterVesselRelated) =>{
  return Math.min.apply(null, newArrayWaterVesselRelated);
};
const numMinNotRelatedToVessel = (newArrayNotRelatedToVessel) =>{
  return Math.min.apply(null, newArrayNotRelatedToVessel);
}
const numMinWater = (newArrayWater) =>{
  return Math.min.apply(null, newArrayWater);
}
const numMinRecreationalBoating = (newArrayRecreationalBoating) =>{
  return Math.min.apply(null, newArrayRecreationalBoating);
}
const numMinPassengerVessel = (newArrayPassengerVessel) =>{
  return Math.min.apply(null, newArrayPassengerVessel);
}
const funnumLowFreightVessel = numMinFreightVessel(newArrayFreightVessel);
const funnumLowWaterVesselRelated = numMinWaterVesselRelated(newArrayWaterVesselRelated);
const funnumLowNotRelatedToVessel = numMinNotRelatedToVessel(newArrayNotRelatedToVessel);
const funnumLowWater = numMinWater(newArrayWater);
const funnumLowRecreationalBoating = numMinWater(newArrayRecreationalBoating);
const funnumLowPassengerVessel = numMinWater(newArrayPassengerVessel);
window.funnumLowFreightVessel = funnumLowFreightVessel;
window.funnumLowWaterVesselRelated = funnumLowWaterVesselRelated;
window.funnumLowNotRelatedToVessel = funnumLowNotRelatedToVessel;
window.funnumLowWater = funnumLowWater;
window.funnumLowRecreationalBoating = funnumLowRecreationalBoating;
window.funnumLowPassengerVessel = funnumLowPassengerVessel;
/**------------------------------------------------------------------------------------------------------------------------ */

//**FILTRAR LA DATA */
const filterData = (dataInjuries,condition) => {
  const filteredYear = dataInjuries.filter(element  => {
    if(element.Year === condition){
      return element;
    }else if(condition === 'Show All'){
      return element;
    }
  });
  return filteredYear;
};
//**ORDENAR LA DATA*/
const sortData = (dataInjuries) =>{
  const sortAB = dataInjuries.sort((a, b) => {
    return a.Total_Injured_Persons_Freight_Vessel - b.Total_Injured_Persons_Freight_Vessel;
  });
  return sortAB;
}

