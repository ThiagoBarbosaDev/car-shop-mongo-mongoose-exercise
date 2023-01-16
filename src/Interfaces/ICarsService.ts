import ICar from './ICar';
import ICarsServiceResponse from './ICarsServiceResponse';

export default interface ICarsService {
  insert(ICarBodyParams: ICar): Promise<ICarsServiceResponse> 
}