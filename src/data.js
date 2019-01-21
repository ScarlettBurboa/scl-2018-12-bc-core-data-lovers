/**SE LLAMA A LA DATA Y SE GUARDA EN UNA CONSTANTE*/
const dataInjuries = (window.INJURIES); 
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
const numHighCatgerory = (categoryAverageWater) => {return Math.max.apply(null, categoryAverageWater)};
const resultNumHighCategory = numHighCatgerory(categoryAverageWater);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgerory = (categoryAverageWater) =>{return Math.min.apply(null, categoryAverageWater);};
const resultNumMinCategory = numMinCatgerory(categoryAverageWater);
window.sumByCategoryAverage = sumByCategoryAverage;
window.resultCategoryAverageWater = resultCategoryAverageWater;
window.resultMediancategoryAverageWater = resultMediancategoryAverageWater;
window.resultNumHighCategory = resultNumHighCategory;
window.resultNumMinCategory = resultNumMinCategory;
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
const filterDatanull = (dataInjuries,condition) => {
  const filteredNullorNumber = dataInjuries.filter(element  => {
    if(element.Total_Injured_Persons_Freight_Vessel === null){
      return element;
    }else if(condition === 'Show All'){
      return element;
    }
  });
  return filteredNullorNumber;
};
/**------------------------------COMIENZO CATEGORIA AIRE-------------------------------------------------- */
const totalOfInjuriesInAir = (dataInjuries) =>{
  const newObjectAcumulatorAir = {
    arrayAir: [],
    arrayGeneralAviation: [],
    arrayOnDemandAir : [],
    arrayUSAirCarrier: [],
 }
 dataInjuries.forEach(element =>{
  newObjectAcumulatorAir.arrayAir.push(element.Total_Injured_Persons_Air);
  newObjectAcumulatorAir.arrayGeneralAviation.push(element.Total_Injured_Persons_General_Aviation);
  newObjectAcumulatorAir.arrayOnDemandAir.push(element.Total_Injured_Persons_On_Demand_Air_Taxi);
  newObjectAcumulatorAir.arrayUSAirCarrier.push(element.Total_Injured_Persons_US_Air_Carrier);
  });
 return newObjectAcumulatorAir;
}
window.totalOfInjuriesInAir = totalOfInjuriesInAir;
const functionTotalAir = totalOfInjuriesInAir(dataInjuries);
const sumAccidentsAir = functionTotalAir.arrayAir.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsGeneralAviation = functionTotalAir.arrayGeneralAviation.reduce((accumulator, currentValue) =>{ return accumulator + currentValue;});
const sumAccidentsOnDemandAir = functionTotalAir.arrayOnDemandAir.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsUSAirCarrier = functionTotalAir.arrayUSAirCarrier.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsAir = sumAccidentsAir;
window.sumAccidentsGeneralAviation = sumAccidentsGeneralAviation;
window.sumAccidentsOnDemandAir = sumAccidentsOnDemandAir;
window.sumAccidentsUSAirCarrier = sumAccidentsUSAirCarrier;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageAir = [];
categoryAverageAir.push(sumAccidentsAir,sumAccidentsGeneralAviation,sumAccidentsOnDemandAir,sumAccidentsUSAirCarrier);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverageAir = categoryAverageAir.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageAir = (sumByCategoryAverageAir / categoryAverageAir.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageAir.sort((a, b) => a - b);
let lowMiddlecategoryAverageAir = Math.floor((categoryAverageAir.length - 1) / 2);
let highMiddlecategoryAverageAir = Math.ceil((categoryAverageAir.length - 1) / 2);
let resultMediancategoryAverageAir = ((categoryAverageAir[highMiddlecategoryAverageAir] + categoryAverageAir[lowMiddlecategoryAverageAir]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryAir = (categoryAverageAir) => {return Math.max.apply(null, categoryAverageAir)};
const resultNumHighCategoryAir = numHighCatgeroryAir(categoryAverageAir);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryAir = (categoryAverageAir) =>{return Math.min.apply(null, categoryAverageAir);};
const resultNumMinCategoryAir = numMinCatgeroryAir(categoryAverageAir);
window.sumByCategoryAverageAir = sumByCategoryAverageAir;
window.resultCategoryAverageAir = resultCategoryAverageAir;
window.resultMediancategoryAverageAir = resultMediancategoryAverageAir;
window.resultNumHighCategoryAir = resultNumHighCategoryAir;
window.resultNumMinCategoryAir = resultNumMinCategoryAir;
/**----------------------------------CATEGORÍA PEDESTRIAN-------------------------------------------------*/
const totalOfInjuriesInPedestrians = (dataInjuries) =>{
  const newObjectAcumulatorPedestrians = {
    arrayPedestrians: []
   }
 dataInjuries.forEach(element =>{
  newObjectAcumulatorPedestrians.arrayPedestrians.push(element.Total_Injured_Persons_Pedestrians);
  });
 return newObjectAcumulatorPedestrians;
}
window.totalOfInjuriesInPedestrians = totalOfInjuriesInPedestrians;
const functionTotalPedestrians = totalOfInjuriesInPedestrians(dataInjuries);
const sumAccidentsPedestrians = functionTotalPedestrians.arrayPedestrians.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsPedestrians = sumAccidentsPedestrians;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAveragePedestrians = [];
categoryAveragePedestrians.push(sumAccidentsPedestrians);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAveragePedestrians = functionTotalPedestrians.arrayPedestrians.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAveragePedestrians = (sumByCategoryAveragePedestrians / categoryAveragePedestrians.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAveragePedestrians.sort((a, b) => a - b);
let lowMiddlecategoryAveragePedestrians = Math.floor((categoryAveragePedestrians.length - 1) / 2);
let highMiddlecategoryAveragePedestrians = Math.ceil((categoryAveragePedestrians.length - 1) / 2);
let resultMediancategoryAveragePedestrians = ((categoryAveragePedestrians[highMiddlecategoryAveragePedestrians] + categoryAveragePedestrians[lowMiddlecategoryAveragePedestrians]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryPedestrians = (categoryAveragePedestrians) => {return Math.max.apply(null, categoryAveragePedestrians)};
const resultNumHighCategoryPedestrians = numHighCatgeroryPedestrians(categoryAveragePedestrians);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryPedestrians = (categoryAveragePedestrians) =>{return Math.min.apply(null, categoryAveragePedestrians);};
const resultNumMinCategoryPedestrians = numMinCatgeroryPedestrians(categoryAveragePedestrians);
window.sumByCategoryAveragePedestrians = sumByCategoryAveragePedestrians;
window.resultCategoryAveragePedestrians = resultCategoryAveragePedestrians;
window.resultMediancategoryAveragePedestrians = resultMediancategoryAveragePedestrians;
window.resultNumHighCategoryPedestrians = resultNumHighCategoryPedestrians;
window.resultNumMinCategoryPedestrians = resultNumMinCategoryPedestrians;
/**----------------------------------CATEGORÍA HIGHWAY-------------------------------------------------*/
const totalOfInjuriesInHighway = (dataInjuries) =>{
  const newObjectAcumulatorHighway = {
    arrayHighway: [],
    arrayHighwayRailGradeCrossing:[],
    arrayHighwayRailGradeCrossingRailroads :[],
    arrayTruckOccupantsLarge :[],
    arrayTruckOccupantsLight: [],
   }
 dataInjuries.forEach(element =>{
  newObjectAcumulatorHighway.arrayHighway.push(element.Total_Injured_Persons_Highway);
  newObjectAcumulatorHighway.arrayHighwayRailGradeCrossing.push(element.Total_Injured_Persons_Highway_Rail_Grade_Crossing);
  newObjectAcumulatorHighway.arrayHighwayRailGradeCrossingRailroads.push(element.Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads);
  newObjectAcumulatorHighway.arrayTruckOccupantsLarge.push(element.Total_Injured_Persons_Truck_Occupants_Large);
  newObjectAcumulatorHighway.arrayTruckOccupantsLight.push(element.Total_Injured_Persons_Truck_Occupants_Light);
  });
 return newObjectAcumulatorHighway;
}
window.totalOfInjuriesInHighway = totalOfInjuriesInHighway;
const functionTotalHighway = totalOfInjuriesInHighway(dataInjuries);
const sumAccidentsHighway = functionTotalHighway.arrayHighway.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsHighwayRailGradeCrossing = functionTotalHighway.arrayHighwayRailGradeCrossing.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsHighwayRailGradeCrossingRailroads = functionTotalHighway.arrayHighwayRailGradeCrossingRailroads.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsTruckOccupantsLarge = functionTotalHighway.arrayTruckOccupantsLarge.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsTruckOccupantsLight = functionTotalHighway.arrayTruckOccupantsLight.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsHighway = sumAccidentsHighway;
window.sumAccidentsHighwayRailGradeCrossing = sumAccidentsHighwayRailGradeCrossing;
window.sumAccidentsHighwayRailGradeCrossingRailroads = sumAccidentsHighwayRailGradeCrossingRailroads;
window.sumAccidentsTruckOccupantsLarge = sumAccidentsTruckOccupantsLarge;
window.sumAccidentsTruckOccupantsLight = sumAccidentsTruckOccupantsLight;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageHighway = [];
categoryAverageHighway.push(sumAccidentsHighwayRailGradeCrossing,sumAccidentsHighway,sumAccidentsHighwayRailGradeCrossingRailroads,sumAccidentsTruckOccupantsLarge,sumAccidentsTruckOccupantsLight);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverageHighway = categoryAverageHighway.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageHighway = (sumByCategoryAverageHighway / categoryAverageHighway.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageHighway.sort((a, b) => a - b);
let lowMiddlecategoryAverageHighway = Math.floor((categoryAverageHighway.length - 1) / 2);
let highMiddlecategoryAverageHighway = Math.ceil((categoryAverageHighway.length - 1) / 2);
let resultMediancategoryAverageHighway = ((categoryAverageHighway[highMiddlecategoryAverageHighway] + categoryAverageHighway[lowMiddlecategoryAverageHighway]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryHighway = (categoryAverageHighway) => {return Math.max.apply(null, categoryAverageHighway)};
const resultNumHighCategoryHighway = numHighCatgeroryHighway(categoryAverageHighway);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryHighway = (categoryAverageHighway) =>{return Math.min.apply(null, categoryAverageHighway);};
const resultNumMinCategoryHighway = numMinCatgeroryHighway(categoryAverageHighway);
window.sumByCategoryAverageHighway = sumByCategoryAverageHighway;
window.resultCategoryAverageHighway = resultCategoryAverageHighway;
window.resultMediancategoryAverageHighway = resultMediancategoryAverageHighway;
window.resultNumHighCategoryHighway = resultNumHighCategoryHighway;
window.resultNumMinCategoryHighway = resultNumMinCategoryHighway;
/**----------------------------------CATEGORÍA PEDESTRIAN-------------------------------------------------*/
const totalOfInjuriesInWork = (dataInjuries) =>{
  const newObjectAcumulatorWork = {
    arrayWork: []
   }
 dataInjuries.forEach(element =>{
  newObjectAcumulatorWork.arrayWork.push(element.Total_Injured_Persons_Employee_Or_Worker);
  });
 return newObjectAcumulatorWork;
}
window.totalOfInjuriesInWork = totalOfInjuriesInWork;
const functionTotalWork = totalOfInjuriesInWork(dataInjuries);
const sumAccidentsWork = functionTotalWork.arrayWork.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsWork = sumAccidentsWork;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageWork = [];
categoryAverageWork.push(sumAccidentsWork);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverageWork = functionTotalWork.arrayWork.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageWork = (sumByCategoryAverageWork / categoryAverageWork.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageWork.sort((a, b) => a - b);
let lowMiddlecategoryAverageWork = Math.floor((categoryAverageWork.length - 1) / 2);
let highMiddlecategoryAverageWork = Math.ceil((categoryAverageWork.length - 1) / 2);
let resultMediancategoryAverageWork = ((categoryAverageWork[highMiddlecategoryAverageWork] + categoryAverageWork[lowMiddlecategoryAverageWork]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryWork = (categoryAverageWork) => {return Math.max.apply(null, categoryAverageWork)};
const resultNumHighCategoryWork = numHighCatgeroryWork(categoryAverageWork);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryWork = (categoryAverageWork) =>{return Math.min.apply(null, categoryAverageWork);};
const resultNumMinCategoryWork = numMinCatgeroryWork(categoryAverageWork);
window.sumByCategoryAverageWork = sumByCategoryAverageWork;
window.resultCategoryAverageWork = resultCategoryAverageWork;
window.resultMediancategoryAverageWork = resultMediancategoryAverageWork;
window.resultNumHighCategoryWork = resultNumHighCategoryWork;
window.resultNumMinCategoryWork = resultNumMinCategoryWork;
/**----------------------------------CATEGORÍA RAILWAY-------------------------------------------------*/
const totalOfInjuriesInRailway = (dataInjuries) =>{
  const newObjectAcumulatorRailway = {
    arrayOtherIncidentsRailroads: [],
    arrayRail:[],
    arrayRailFreight :[],
    arrayRailFreightHighwayRailGradeCrossing:[],
    arrayRailFreightOtherIncidents: [],
    arrayRailFreightTrainAccidents: [],
    arrayRailFreightTrespassers: [],
    arrayRailRoadTrespassers: [],
    arrayRailroad: [],
    arrayRailroadAlones: [],
    arrayRailroadTrainAccidents: []
   }
 dataInjuries.forEach(element =>{
newObjectAcumulatorRailway.arrayOtherIncidentsRailroads.push(element.Total_Injured_Persons_Other_Incidents_Railroads);
newObjectAcumulatorRailway.arrayRail.push(element.Total_Injured_Persons_Rail);
newObjectAcumulatorRailway.arrayRailFreight.push(element.Total_Injured_Persons_Rail_Freight);
newObjectAcumulatorRailway.arrayRailFreightHighwayRailGradeCrossing.push(element.Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing);
newObjectAcumulatorRailway.arrayRailFreightOtherIncidents.push(element.Total_Injured_Persons_Rail_Freight_Other_Incidents);
newObjectAcumulatorRailway.arrayRailFreightTrainAccidents.push(element.Total_Injured_Persons_Rail_Freight_Train_Accidents);
newObjectAcumulatorRailway.arrayRailFreightTrespassers.push(element.Total_Injured_Persons_Rail_Freight_Trespassers);
newObjectAcumulatorRailway.arrayRailRoadTrespassers.push(element.Total_Injured_Persons_Rail_Road_Trespassers);
newObjectAcumulatorRailway.arrayRailroad.push(element.Total_Injured_Persons_Railroad);
newObjectAcumulatorRailway.arrayRailroadAlones.push(element.Total_Injured_Persons_Railroad_Alone);
newObjectAcumulatorRailway.arrayRailroadTrainAccidents.push(element.Total_Injured_Persons_Railroad_Train_Accidents);
  });
 return newObjectAcumulatorRailway;
}
window.totalOfInjuriesInRailway = totalOfInjuriesInRailway;
const functionTotalRailway = totalOfInjuriesInRailway(dataInjuries);
const sumAccidentsOtherIncidentsRailroads = functionTotalRailway.arrayOtherIncidentsRailroads.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRail = functionTotalRailway.arrayRail.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailFreight = functionTotalRailway.arrayRailFreight.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailFreightHighwayRailGradeCrossing = functionTotalRailway.arrayRailFreightHighwayRailGradeCrossing.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailFreightOtherIncidents = functionTotalRailway.arrayRailFreightOtherIncidents.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailFreightTrainAccidents = functionTotalRailway.arrayRailFreightTrainAccidents.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailFreightTrespassers = functionTotalRailway.arrayRailFreightTrespassers.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailRoadTrespassers = functionTotalRailway.arrayRailRoadTrespassers.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailroad = functionTotalRailway.arrayRailroad.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsRailroadAlones = functionTotalRailway.arrayRailroadAlones.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentRailroadTrainAccidents = functionTotalRailway.arrayRailroadTrainAccidents.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsOtherIncidentsRailroads = sumAccidentsOtherIncidentsRailroads;
window.sumAccidentsRail = sumAccidentsRail;
window.sumAccidentsRailFreight = sumAccidentsRailFreight;
window.sumAccidentsRailFreightHighwayRailGradeCrossing = sumAccidentsRailFreightHighwayRailGradeCrossing;
window.sumAccidentsRailFreightOtherIncidents = sumAccidentsRailFreightOtherIncidents;
window.sumAccidentsRailFreightTrainAccidents = sumAccidentsRailFreightTrainAccidents;
window.sumAccidentsRailFreightTrespassers = sumAccidentsRailFreightTrespassers;
window.sumAccidentsRailRoadTrespassers = sumAccidentsRailRoadTrespassers;
window.sumAccidentsRailroad = sumAccidentsRailroad;
window.sumAccidentsRailroadAlones = sumAccidentsRailroadAlones;
window.sumAccidentRailroadTrainAccidents = sumAccidentRailroadTrainAccidents;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageRailway = [];
categoryAverageRailway.push(sumAccidentsOtherIncidentsRailroads,sumAccidentsRail,sumAccidentsRailFreight,sumAccidentsRailFreightHighwayRailGradeCrossing,sumAccidentsRailFreightOtherIncidents,sumAccidentsRailFreightTrainAccidents, sumAccidentsRailFreightTrespassers, sumAccidentsRailRoadTrespassers,sumAccidentsRailroad, sumAccidentsRailroadAlones, sumAccidentRailroadTrainAccidents);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverageRailway = categoryAverageRailway.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageRailway = (sumByCategoryAverageRailway / categoryAverageRailway.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageRailway.sort((a, b) => a - b);
let lowMiddlecategoryAverageRailway = Math.floor((categoryAverageRailway.length - 1) / 2);
let highMiddlecategoryAverageRailway = Math.ceil((categoryAverageRailway.length - 1) / 2);
let resultMediancategoryAverageRailway = ((categoryAverageRailway[highMiddlecategoryAverageRailway] + categoryAverageRailway[lowMiddlecategoryAverageRailway]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryRailway = (categoryAverageRailway) => {return Math.max.apply(null, categoryAverageRailway)};
const resultNumHighCategoryRailway = numHighCatgeroryRailway(categoryAverageRailway);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryRailway = (categoryAverageRailway) =>{return Math.min.apply(null, categoryAverageRailway);};
const resultNumMinCategoryRailway = numMinCatgeroryRailway(categoryAverageRailway);
window.sumByCategoryAverageRailway = sumByCategoryAverageRailway;
window.resultCategoryAverageRailway = resultCategoryAverageRailway;
window.resultMediancategoryAverageRailway = resultMediancategoryAverageRailway;
window.resultNumHighCategoryRailway = resultNumHighCategoryRailway;
window.resultNumMinCategoryRailway = resultNumMinCategoryRailway;
/**----------------------------------CATEGORÍA PUBLIC TRANSPORT-------------------------------------------------*/
const totalOfInjuriesInPublicTransport = (dataInjuries) =>{
  const newObjectAcumulatorPublicTransport = {
    arrayBusOccupants:[],
    arrayMotorcyclists: [],
    arrayPassengerCarOccupants: [],
    arrayPedalcyclists: []
   }
 dataInjuries.forEach(element =>{
newObjectAcumulatorPublicTransport.arrayBusOccupants.push(element.Total_Injured_Persons_Bus_Occupants);
newObjectAcumulatorPublicTransport.arrayMotorcyclists.push(element.Total_Injured_Persons_Motorcyclists);
newObjectAcumulatorPublicTransport.arrayPassengerCarOccupants.push(element.Total_Injured_Persons_Passenger_Car_Occupants);
newObjectAcumulatorPublicTransport.arrayPedalcyclists.push(element.Total_Injured_Persons_Pedalcyclists);
  });
 return newObjectAcumulatorPublicTransport;
}
window.totalOfInjuriesInPublicTransport = totalOfInjuriesInPublicTransport;
const functionTotalPublicTransport = totalOfInjuriesInPublicTransport(dataInjuries);
const sumAccidentsBusOccupants = functionTotalPublicTransport.arrayBusOccupants.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsMotorcyclists = functionTotalPublicTransport.arrayMotorcyclists.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsPassengerCarOccupants = functionTotalPublicTransport.arrayPassengerCarOccupants.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsPedalcyclists = functionTotalPublicTransport.arrayPedalcyclists.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsBusOccupants = sumAccidentsBusOccupants;
window.sumAccidentsMotorcyclists = sumAccidentsMotorcyclists;
window.sumAccidentsPassengerCarOccupants = sumAccidentsPassengerCarOccupants;
window.sumAccidentsPedalcyclists = sumAccidentsPedalcyclists;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAveragePublicTransport = [];
categoryAveragePublicTransport.push(sumAccidentsBusOccupants,sumAccidentsMotorcyclists,sumAccidentsPassengerCarOccupants,sumAccidentsPedalcyclists);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAveragePublicTransport = categoryAveragePublicTransport.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAveragePublicTransport = (sumByCategoryAveragePublicTransport / categoryAveragePublicTransport.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAveragePublicTransport.sort((a, b) => a - b);
let lowMiddlecategoryAveragePublicTransport = Math.floor((categoryAveragePublicTransport.length - 1) / 2);
let highMiddlecategoryAveragePublicTransport = Math.ceil((categoryAveragePublicTransport.length - 1) / 2);
let resultMediancategoryAveragePublicTransport = ((categoryAveragePublicTransport[highMiddlecategoryAveragePublicTransport] + categoryAveragePublicTransport[lowMiddlecategoryAveragePublicTransport]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryPublicTransport = (categoryAveragePublicTransport) => {return Math.max.apply(null, categoryAveragePublicTransport)};
const resultNumHighCategoryPublicTransport = numHighCatgeroryPublicTransport(categoryAveragePublicTransport);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryPublicTransport = (categoryAveragePublicTransport) =>{return Math.min.apply(null, categoryAveragePublicTransport);};
const resultNumMinCategoryPublicTransport = numMinCatgeroryPublicTransport(categoryAveragePublicTransport);
window.sumByCategoryAveragePublicTransport = sumByCategoryAveragePublicTransport;
window.resultCategoryAveragePublicTransport = resultCategoryAveragePublicTransport;
window.resultMediancategoryAveragePublicTransport = resultMediancategoryAveragePublicTransport;
window.resultNumHighCategoryPublicTransport = resultNumHighCategoryPublicTransport;
window.resultNumMinCategoryPublicTransport = resultNumMinCategoryPublicTransport;
/**----------------------------------CATEGORÍA PIPELINE-------------------------------------------------*/
const totalOfInjuriesInPipeline = (dataInjuries) =>{
  const newObjectAcumulatorPipeline = {
    arrayGasPipeline:[],
    arrayHazardousLiquidPipeline: [],
    arrayPipeline: []
   }
 dataInjuries.forEach(element =>{
newObjectAcumulatorPipeline.arrayGasPipeline.push(element.Total_Injured_Persons_Gas_Pipeline);
newObjectAcumulatorPipeline.arrayHazardousLiquidPipeline.push(element.Total_Injured_Persons_Hazardous_Liquid_Pipeline);
newObjectAcumulatorPipeline.arrayPipeline.push(element.Total_Injured_Persons_Pipeline);
  });
 return newObjectAcumulatorPipeline;
}
window.totalOfInjuriesInPipeline = totalOfInjuriesInPipeline;
const functionTotalPipeline = totalOfInjuriesInPipeline(dataInjuries);
const sumAccidentsGasPipeline = functionTotalPipeline.arrayGasPipeline.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsHazardousLiquidPipeline = functionTotalPipeline.arrayHazardousLiquidPipeline.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsPipeline = functionTotalPipeline.arrayPipeline.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsPipeline = sumAccidentsPipeline;
window.sumAccidentsHazardousLiquidPipeline = sumAccidentsHazardousLiquidPipeline;
window.sumAccidentsPipeline = sumAccidentsPipeline;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAveragePipeline = [];
categoryAveragePipeline.push(sumAccidentsPipeline,sumAccidentsHazardousLiquidPipeline,sumAccidentsPipeline);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAveragePipeline = categoryAveragePipeline.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAveragePipeline = (sumByCategoryAveragePipeline / categoryAveragePipeline.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAveragePipeline.sort((a, b) => a - b);
let lowMiddlecategoryAveragePipeline = Math.floor((categoryAveragePipeline.length - 1) / 2);
let highMiddlecategoryAveragePipeline = Math.ceil((categoryAveragePipeline.length - 1) / 2);
let resultMediancategoryAveragePipeline = ((categoryAveragePipeline[highMiddlecategoryAveragePipeline] + categoryAveragePipeline[lowMiddlecategoryAveragePipeline]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryPipeline = (categoryAveragePipeline) => {return Math.max.apply(null, categoryAveragePipeline)};
const resultNumHighCategoryPipeline = numHighCatgeroryPipeline(categoryAveragePipeline);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryPipeline = (categoryAveragePipeline) =>{return Math.min.apply(null, categoryAveragePipeline);};
const resultNumMinCategoryPipeline = numMinCatgeroryPipeline(categoryAveragePipeline);
window.sumByCategoryAveragePipeline = sumByCategoryAveragePipeline;
window.resultCategoryAveragePipeline = resultCategoryAveragePipeline;
window.resultMediancategoryAveragePipeline = resultMediancategoryAveragePipeline;
window.resultNumHighCategoryPipeline = resultNumHighCategoryPipeline;
window.resultNumMinCategoryPipeline = resultNumMinCategoryPipeline;
/**--------------------CATEGORÍA OTHER------------------------------------------------------------------- */
const totalOfInjuriesInOther = (dataInjuries) =>{
  const newObjectAcumulatorOther = {
    arrayCommuterCarrierOther : [],
    arrayIndustrialOrOther  : [],
    arrayOtherCounts : [],
    arrayOtherIncident : [],
    arrayOtherIncidentTransit : [],
    arrayOtherIncidents : [],
    arrayPassengerOrOccupant : [],
    arrayTransitNonRail : [],
    arrayTransitTotal : [],
    arrayTrespassers : []
   }
 dataInjuries.forEach(element =>{
newObjectAcumulatorOther.arrayCommuterCarrierOther.push(element.Total_Injured_Persons_Commuter_Carrier);
newObjectAcumulatorOther.arrayIndustrialOrOther.push(element.Total_Injured_Persons_Industrial_Or_Other);
newObjectAcumulatorOther.arrayOtherCounts.push(element.Total_Injured_Persons_Other_Counts);
newObjectAcumulatorOther.arrayOtherIncident.push(element.Total_Injured_Persons_Other_Incident);
newObjectAcumulatorOther.arrayOtherIncidentTransit.push(element.Total_Injured_Persons_Other_Incident_Transit);
newObjectAcumulatorOther.arrayOtherIncidents.push(element.Total_Injured_Persons_Other_Incidents);
newObjectAcumulatorOther.arrayPassengerOrOccupant.push(element.Total_Injured_Persons_Passenger_Or_Occupant);
newObjectAcumulatorOther.arrayTransitNonRail.push(element.Total_Injured_Persons_Transit_Non_Rail);
newObjectAcumulatorOther.arrayTransitTotal.push(element.Total_Injured_Persons_Transit_Total);
newObjectAcumulatorOther.arrayTrespassers.push(element.Total_Injured_Persons_Trespassers);
  });
 return newObjectAcumulatorOther;
}
window.totalOfInjuriesInOther = totalOfInjuriesInOther;
const functionTotalOthers = totalOfInjuriesInOther(dataInjuries);
const sumAccidentsCommuterCarrier = functionTotalOthers.arrayCommuterCarrierOther.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsIndustrialOrOther = functionTotalOthers.arrayIndustrialOrOther.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsOtherCounts = functionTotalOthers.arrayOtherCounts.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsOtherIncident = functionTotalOthers.arrayOtherIncident.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsOtherIncidentTransit = functionTotalOthers.arrayOtherIncidentTransit.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsOtherIncidents = functionTotalOthers.arrayOtherIncidents.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsPassengerOrOccupant = functionTotalOthers.arrayPassengerOrOccupant.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsTransitNonRail = functionTotalOthers.arrayTransitNonRail.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsTransitTotal = functionTotalOthers.arrayTransitTotal.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
const sumAccidentsTrespassers = functionTotalOthers.arrayTrespassers.reduce((accumulator, currentValue) =>{return accumulator + currentValue;});
window.sumAccidentsCommuterCarrier = sumAccidentsCommuterCarrier;
window.sumAccidentsIndustrialOrOther = sumAccidentsIndustrialOrOther;
window.sumAccidentsOtherCounts = sumAccidentsOtherCounts;
window.sumAccidentsOtherIncident = sumAccidentsOtherIncident;
window.sumAccidentsPassengerOrOccupant = sumAccidentsPassengerOrOccupant;
window.sumAccidentsOtherIncidentTransit = sumAccidentsOtherIncidentTransit;
window.sumAccidentsOtherIncidents = sumAccidentsOtherIncidents;
window.sumAccidentsTransitNonRail = sumAccidentsTransitNonRail;
window.sumAccidentsTransitTotal = sumAccidentsTransitTotal;
window.sumAccidentsTrespassers= sumAccidentsTrespassers;
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
const categoryAverageOther = [];
categoryAverageOther.push(sumAccidentsCommuterCarrier,sumAccidentsIndustrialOrOther,sumAccidentsOtherCounts,sumAccidentsOtherIncident,sumAccidentsPassengerOrOccupant,sumAccidentsOtherIncidentTransit,sumAccidentsOtherIncidents,sumAccidentsTransitNonRail,sumAccidentsTransitTotal,sumAccidentsTrespassers);
/**SUMA DE TODOS LOS ELEMENTOS DEL NUEVO ARRAY CATEGORYAVEGAREWATER = TOTAL DE HERIDOS EN CATEGORIA ACCIDENTES EN AGUA */
let sumByCategoryAverageOther = categoryAverageOther.reduce((accumulator, currentValue) => accumulator += currentValue);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR EL PROMEDIO DEL GRUPO*/
let resultCategoryAverageOther = (sumByCategoryAverageOther / categoryAverageOther.length);
/**SE UNEN EN UN ARRAY VACIO TODOS LAS SUBCATEGORIAS PARA SACAR LA MEDIANA ARITMÉTICA DEL GRUPO*/
categoryAverageOther.sort((a, b) => a - b);
let lowMiddlecategoryAverageOther = Math.floor((categoryAverageOther.length - 1) / 2);
let highMiddlecategoryAverageOther = Math.ceil((categoryAverageOther.length - 1) / 2);
let resultMediancategoryAverageOther = ((categoryAverageOther[highMiddlecategoryAverageOther] + categoryAverageOther[lowMiddlecategoryAverageOther]) / 2)
/**FUNCIÓN PARA SACAR EL NÚMERO MAXIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE AGUA */
const numHighCatgeroryOther = (categoryAverageOther) => {return Math.max.apply(null, categoryAverageOther)};
const resultNumHighCategoryOther = numHighCatgeroryOther(categoryAverageOther);
/**FUNCIÓN PARA SACAR EL NÚMERO MÍNIMO DE UN ARRAY EN ESTE CASO AL ARRAY TOTAL DE CATEGORIAS DE ACCIDENTES EN AGUA */
const numMinCatgeroryOther = (categoryAverageOther) =>{return Math.min.apply(null, categoryAverageOther);};
const resultNumMinCategoryOther = numMinCatgeroryOther(categoryAverageOther);
window.sumByCategoryAverageOther = sumByCategoryAverageOther;
window.resultCategoryAverageOther = resultCategoryAverageOther;
window.resultMediancategoryAverageOther = resultMediancategoryAverageOther;
window.resultNumHighCategoryOther = resultNumHighCategoryOther;
window.resultNumMinCategoryOther = resultNumMinCategoryOther;
