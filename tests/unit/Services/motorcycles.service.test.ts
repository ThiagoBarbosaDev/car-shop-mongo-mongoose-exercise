import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/Motorcycles.service';

const validMotorcycleInput:IMotorcycle = { 
  model: 'Cybercycle',
  year: 2077,
  color: 'silver',
  status: true,
  buyValue: 100000,
  category: 'Trail',
  engineCapacity: 900,
};
  
const validMotorcycleOutput:IMotorcycle = {
  id: '63c86b9c7824989d60510169',
  model: 'Cybertruck',
  year: 2077,
  color: 'silver',
  status: true,
  buyValue: 100000,
  category: 'Trail',
  engineCapacity: 900,
};

const findMotorcycleOutput = [
  {
    id: '63c86b9c7824989d60510169',
    model: 'Cybertruck',
    year: 2077,
    color: 'silver',
    status: true,
    buyValue: 100000,
    category: 'Trail',
    engineCapacity: 900,
  },
];

describe('Should create all CRUD operation and errors for the Motorcycles service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should insert a motorcycle successfully', async function () {
    sinon.stub(Model, 'create').resolves(validMotorcycleOutput);

    const service = new MotorcyclesService();
    const result = await service.insert(validMotorcycleInput);

    expect(result).to.be.deep.equal(validMotorcycleOutput);
  });

  it('should retrieve the motorcycle list successfully', async function () {
    sinon.stub(Model, 'find').resolves(findMotorcycleOutput);
    const service = new MotorcyclesService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(findMotorcycleOutput);
  });

  it('should retrieve the chosen motorcycle successfully', async function () {
    sinon.stub(Model, 'findById').resolves(validMotorcycleOutput);
    const service = new MotorcyclesService();
    const result = await service.findById(validMotorcycleOutput.id as string);

    expect(result).to.be.deep.equal(validMotorcycleOutput);
  });
});