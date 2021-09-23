import { createTest, destroyVM } from '../util';
import TrackDataChart from 'packages/track-data-chart';

describe('TrackDataChart', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TrackDataChart, true);
    expect(vm.$el).to.exist;
  });
});

