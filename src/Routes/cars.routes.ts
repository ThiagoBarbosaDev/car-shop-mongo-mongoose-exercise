import { Router } from 'express';
import CarsController from '../Controllers/Cars.controller';
import CarsService from '../Services/Cars.service';

const carsRouter = Router();

const carService = new CarsService();
const carController = new CarsController(carService); 

carsRouter.route('/')
  .get((req, res, next) => carController.findAll(req, res, next))
  .post((req, res, next) => carController.insert(req, res, next));
carsRouter.route('/:id')
  .get((req, res, next) => carController.findById(req, res, next));

export default carsRouter;