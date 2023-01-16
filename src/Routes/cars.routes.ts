import { Router } from 'express';
import CarsController from '../Controllers/Cars.controller';
import CarsService from '../Services/Cars.service';

const carsRouter = Router();

carsRouter.route('/')
  .post((req, res, next) => new CarsController(new CarsService()).insert(req, res, next));

export default carsRouter;