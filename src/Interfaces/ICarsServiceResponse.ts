import { Types } from 'mongoose';

export default interface ICarsServiceResponse {
  id: Types.ObjectId;
  model: string;
  year: number;
  color: string;
  status: boolean | undefined;
  buyValue: string;
  doorsQty: number;
  seatsQty: number;
}