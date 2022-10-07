import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
