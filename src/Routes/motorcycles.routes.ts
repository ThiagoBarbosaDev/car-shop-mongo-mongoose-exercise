import { Router } from 'express';
import MotorcyclesController from '../Controllers/Motorcycles.controller';
import MotorcyclesService from '../Services/Motorcycles.service';

const motorcyclesRouter = Router();

const motorcyclesService = new MotorcyclesService();
const carController = new MotorcyclesController(motorcyclesService); 

motorcyclesRouter.route('/')
  .get((req, res, next) => carController.findAll(req, res, next))
  .post((req, res, next) => carController.insert(req, res, next));
motorcyclesRouter.route('/:id')
  .get((req, res, next) => carController.findById(req, res, next))
  .put((req, res, next) => carController.update(req, res, next));

export default motorcyclesRouter;