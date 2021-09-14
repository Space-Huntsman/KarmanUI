import { createTest, destroyVM } from '../util';
import OrbitElements from 'packages/orbit-elements';

describe('OrbitElements', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(OrbitElements, true);
    expect(vm.$el).to.exist;
  });
});

