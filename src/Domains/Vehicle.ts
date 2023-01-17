import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(
    vehicleOptions: IVehicle,
  ) {
    this.id = vehicleOptions.id;
    this.model = vehicleOptions.model;
    this.year = vehicleOptions.year;
    this.color = vehicleOptions.color;
    this.status = vehicleOptions.status;
    this.buyValue = vehicleOptions.buyValue;
  }
}
