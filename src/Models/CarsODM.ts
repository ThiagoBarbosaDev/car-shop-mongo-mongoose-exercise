import {
  Model,
  Schema,
  model,
  models,
  Types,
  Document,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: false },
      doorsQty: { type: Number, required: false },
      seatsQty: { type: Number, required: false },
    });
    this.model = models.Cars || model('Car', this.schema);
  }

  public async insert(car: ICar): Promise<Document<unknown, any, ICar> & ICar & {
    _id: Types.ObjectId;
  }> {
    return this.model.create({ ...car });
  }
}