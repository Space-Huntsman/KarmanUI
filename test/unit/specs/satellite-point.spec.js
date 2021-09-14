import { createTest, destroyVM } from '../util';
import SatellitePoint from 'packages/satellite-point';

describe('SatellitePoint', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(SatellitePoint, true);
    expect(vm.$el).to.exist;
  });
});

