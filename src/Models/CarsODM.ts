import {
  Schema,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: false },
      doorsQty: { type: Number, required: false },
      seatsQty: { type: Number, required: false },
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
    super(schema, 'Car');
  }
}