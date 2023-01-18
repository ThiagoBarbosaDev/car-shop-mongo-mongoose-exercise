import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/Cars.service';
import ICar from '../../../src/Interfaces/ICar';

const validCarInput:ICar = { 
  model: 'Cybertruck',
  year: 2077,
  color: 'silver',
  status: true,
  buyValue: 100000,
  doorsQty: 2,
  seatsQty: 4,
};
  
const validCarOutput:ICar = {
  id: '63c86b9c7824989d60510169',
  model: 'Cybertruck',
  year: 2077,
  color: 'silver',
  status: true,
  buyValue: 100000,
  doorsQty: 2,
  seatsQty: 4,
};

const findCarsOutput = [
  {
    id: '63c86b9c7824989d60510169',
    model: 'Cybertruck',
    year: 2077,
    color: 'silver',
    status: true,
    buyValue: 100000,
    doorsQty: 2,
    seatsQty: 4,
  },
];

describe('Should create all CRUD operation and errors for the Cars service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should insert a car successfully', async function () {
    sinon.stub(Model, 'create').resolves(validCarOutput);

    const service = new CarsService();
    const result = await service.insert(validCarInput);

    expect(result).to.be.deep.equal(validCarOutput);
  });

  it('should retrieve the car list successfully', async function () {
    sinon.stub(Model, 'find').resolves(findCarsOutput);
    const service = new CarsService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(findCarsOutput);
  });

  it('should retrieve the chosen car successfully', async function () {
    sinon.stub(Model, 'findById').resolves(validCarOutput);
    const service = new CarsService();
    const result = await service.findById(validCarOutput.id as string);

    expect(result).to.be.deep.equal(validCarOutput);
  });
});