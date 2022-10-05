import { Beans, Rice } from './Meals';
import { ComposedMeal } from './ComposedMeal';
import { MealBuilderProtocol } from '../interfaces/MealBuilderProtocol';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 6.75);
    const beans = new Beans('Feijão', 10.89);
    this._meal.addMeal(rice, beans);
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
