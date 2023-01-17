import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  constructor(
    carOptions: ICar,
  ) {
    super(carOptions);
    this.doorsQty = carOptions.doorsQty;
    this.seatsQty = carOptions.seatsQty;
  }
}

export default Car;
