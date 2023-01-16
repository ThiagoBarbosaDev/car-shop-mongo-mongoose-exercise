import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    carOptions: ICar,
  ) {
    this.id = carOptions.id;
    this.model = carOptions.model;
    this.year = carOptions.year;
    this.color = carOptions.color;
    this.status = carOptions.status;
    this.buyValue = carOptions.buyValue;
    this.doorsQty = carOptions.doorsQty;
    this.seatsQty = carOptions.seatsQty;
  }
}

export default Car;