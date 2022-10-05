import { VeganDishBuilder } from './classes/VeganDishBuilder';
import { MainDishBuilder } from './classes/MainDishBuilder';
const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

const mainMeal1 = mainDishBuilder
  .makeMeal()
  .makeBeverage()
  .makeDessert()
  .getMeal();
const mainPrice1 = mainMeal1.getFormattedPrice();
mainDishBuilder.reset();
console.log(mainMeal1, mainPrice1);

const mainMeal2 = mainDishBuilder.makeMeal().makeBeverage().getMeal();
const mainPrice2 = mainMeal2.getFormattedPrice();
mainDishBuilder.reset();
console.log(mainMeal2, mainPrice2);

const mainMeal3 = mainDishBuilder.makeDessert().getMeal();
const mainPrice3 = mainMeal3.getFormattedPrice();
mainDishBuilder.reset();
console.log(mainMeal3, mainPrice3);

const veganMeal1 = veganDishBuilder.makeMeal().getMeal();
const veganPrice1 = veganMeal1.getFormattedPrice();
veganDishBuilder.reset();
console.log(veganMeal1, veganPrice1);
