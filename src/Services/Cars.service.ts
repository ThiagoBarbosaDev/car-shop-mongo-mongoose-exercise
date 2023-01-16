// import UsersModel from '../database/models/UsersModel';
import ICar from '../Interfaces/ICar';
import ICarsService from '../Interfaces/ICarsService';
import ICarServiceResponse from '../Interfaces/ICarsServiceResponse';
import CarsODM from '../Models/CarsODM';

export default class CarsService implements ICarsService {
  insert = async (newCarPayload: ICar): Promise<ICarServiceResponse> => {
    const carODM = new CarsODM();
    const ODMResponse = await carODM.insert(newCarPayload);
    const response = {
      id: ODMResponse._id,
      model: ODMResponse.model,
      year: ODMResponse.year,
      color: ODMResponse.color,
      status: ODMResponse.status || false,
      buyValue: ODMResponse.buyValue.toFixed(3),
      doorsQty: ODMResponse.doorsQty,
      seatsQty: ODMResponse.seatsQty,
    };
    return response;
  };
}