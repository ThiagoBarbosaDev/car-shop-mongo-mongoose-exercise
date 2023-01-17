import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    motorcycleOptions: IMotorcycle,
  ) {
    super(motorcycleOptions);
    this.category = motorcycleOptions.category;
    this.engineCapacity = motorcycleOptions.engineCapacity;
  }
}
