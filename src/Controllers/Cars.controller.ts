import { NextFunction, Request, Response } from 'express';
import ICarsService from '../Interfaces/ICarsService';

export default class CarsController {
  constructor(private carsService: ICarsService) {
    this.carsService = carsService;
  }

  public async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const newCar = await this.carsService.insert(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
}
