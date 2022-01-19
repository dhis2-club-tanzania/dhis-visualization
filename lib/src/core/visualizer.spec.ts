import { D2Visualizer } from './visualizer';
describe('Given and instance of visualizer class', () => {
  let visualizer = new D2Visualizer();
  it('should be instantiated', () => {
    expect(visualizer).toBeInstanceOf(D2Visualizer);
  });
});
