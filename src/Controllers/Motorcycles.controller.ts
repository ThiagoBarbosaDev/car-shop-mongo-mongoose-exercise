import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcyclesService from '../Services/Motorcycles.service';

export default class MotorcyclesController {
  constructor(private motorcyclesService: MotorcyclesService) {
    this.motorcyclesService = motorcyclesService;
  }

  public async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const newCar = await this.motorcyclesService.insert(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const carList = await this.motorcyclesService.findAll();
      return res.status(200).json(carList);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) { return res.status(422).json({ message: 'Invalid mongo id' }); }
      const ODMResponse = await this.motorcyclesService.findById(id);
      if (!ODMResponse) { return res.status(404).json({ message: 'Motorcycle not found' }); }
      return res.status(200).json(ODMResponse);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatePayload = req.body;
      if (!isValidObjectId(id)) { return res.status(422).json({ message: 'Invalid mongo id' }); }
      const ODMResponse = await this.motorcyclesService.update(id, updatePayload);
      if (!ODMResponse) { return res.status(404).json({ message: 'Motorcycle not found' }); }
      return res.status(200).json(ODMResponse);
    } catch (error) {
      next(error);
    }
  }
}
