import CarsODM from '../Models/CarsODM';
import ICar from './ICar';

export default interface ICarsService {
  readonly carODM: CarsODM;
  insert(ICarBodyParams: ICar): Promise<ICar>;
  findAll(): Promise<ICar[]> ;
  findById(id: string): Promise<ICar | null>;
  update(id: string, payload: Record<string, (string | number)>): Promise<any>;
}