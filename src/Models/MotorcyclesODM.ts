import {
  Schema,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: false },
      category: { type: String, required: false },
      engineCapacity: { type: Number, required: false },
    }, {
      id: true,
      toJSON: {
        transform(_doc, ret) {
          const Ret = ret;
          Ret.id = ret._id;
          delete Ret._id;
          delete Ret.__v;
        },
      },
      // https://www.mongodb.com/community/forums/t/change-the-id-field-name-and-value/173285
    });
    super(schema, 'Motorcycle');
  }
}