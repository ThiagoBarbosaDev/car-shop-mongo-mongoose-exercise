// import { Model } from 'mongoose';
// import ICar from '../Interfaces/ICar';
// import ICarsService from '../Interfaces/ICarsService';
// import IMotorcycle from '../Interfaces/IMotorcycle';
// import AbstractODM from '../Models/AbstractODM';
// import CarsODM from '../Models/CarsODM';

// todo: Making abstract generic service

// export default abstract class VehicleService<T> {
//   protected model: AbstractODM<T>;

//   constructor(model: AbstractODM<T>) {
//     this.model = model;
//   }

//   public async insert(newCarPayload: T): Promise<T> {
//     const ODMResponse = await this.model.create(newCarPayload);
//     if (!newCarPayload?.status) { ODMResponse.status = false; } 
//     return ODMResponse;
//   }

//   findAll = async (): Promise<T[]> => {
//     const ODMResponse = await this.model.find();
//     return ODMResponse;
//   };

//   findById = async (id: string): Promise<any | null> => {
//     const ODMResponse = await this.model.findById(id);
//     return ODMResponse;
//   };

//   update = async (id: string, payload: Partial<T>): Promise<any> => {
//     const ODMResponse = await this.model.update(id, { ...payload });
//     console.log(ODMResponse);
//     return ODMResponse;
//   };
// }