import { Beans, Beverage, Dessert, Meat, Rice } from './meals';
import { ComposedMeal } from './composed-meal';
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 6.75);
    const beans = new Beans('Feijão', 10.89);
    const meat = new Meat('Carne', 24.5);
    this._meal.addMeal(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7.99);
    this._meal.addMeal(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 6.5);
    this._meal.addMeal(dessert);
    return this;
  }

  getMeal(): ComposedMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  getFormattedPrice(locale?: string, currency?: string): string {
    return this._meal.getFormattedPrice(locale, currency);
  }
}
