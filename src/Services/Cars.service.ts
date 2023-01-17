import ICar from '../Interfaces/ICar';
import ICarsService from '../Interfaces/ICarsService';
import CarsODM from '../Models/CarsODM';

export default class CarsService implements ICarsService {
  readonly carsODM;
  constructor() {
    this.carsODM = new CarsODM();
  }

  insert = async (newCarPayload: ICar): Promise<ICar> => {
    const ODMResponse = await this.carsODM.create(newCarPayload);
    if (!newCarPayload?.status) { ODMResponse.status = false; } 
    return ODMResponse;
  };

  findAll = async (): Promise<ICar[]> => {
    const ODMResponse = await this.carsODM.find();
    return ODMResponse;
  };

  findById = async (id: string): Promise<ICar | null> => {
    const ODMResponse = await this.carsODM.findById(id);
    return ODMResponse;
  };

  update = async (id: string, payload: Record<string, (string | number)>): Promise<any> => {
    const ODMResponse = await this.carsODM.update(id, { ...payload });
    return ODMResponse;
  };
}