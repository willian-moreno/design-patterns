import { MealCompositeProtocol } from '../interfaces/MealCompositeProtocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
