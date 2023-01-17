import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const carList = await this.carsService.findAll();
      return res.status(200).json(carList);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) { return res.status(422).json({ message: 'Invalid mongo id' }); }
      const response = await this.carsService.findById(id);
      if (!response) { return res.status(404).json({ message: 'Car not found' }); }
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
