import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class ComposedMeal implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  getFormattedPrice(locale?: string, currency?: string): string {
    return new Intl.NumberFormat(locale || 'pt-BR', {
      style: 'currency',
      currency: currency || 'BRL',
    }).format(this.getPrice());
  }

  addMeal(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => {
      this._children.push(item);
    });
  }
}
