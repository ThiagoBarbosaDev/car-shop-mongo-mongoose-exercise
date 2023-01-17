import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcyclesService {
  readonly MotorcyclesODM;
  constructor() {
    this.MotorcyclesODM = new MotorcyclesODM();
  }

  insert = async (newMotorcyclePayload: IMotorcycle): Promise<IMotorcycle> => {
    const ODMResponse = await this.MotorcyclesODM.create(newMotorcyclePayload);
    if (!newMotorcyclePayload?.status) { ODMResponse.status = false; } 
    return ODMResponse;
  };

  findAll = async (): Promise<IMotorcycle[]> => {
    const ODMResponse = await this.MotorcyclesODM.find();
    return ODMResponse;
  };

  findById = async (id: string): Promise<IMotorcycle | null> => {
    const ODMResponse = await this.MotorcyclesODM.findById(id);
    return ODMResponse;
  };

  update = async (id: string, payload: Record<string, (string | number)>): Promise<any> => {
    const ODMResponse = await this.MotorcyclesODM.update(id, { ...payload });
    return ODMResponse;
  };
}