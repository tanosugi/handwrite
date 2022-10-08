import { VFC } from 'react';

import { FabricCanvasContainer } from './containers';
import { Canvas, Toolbar } from './components';

const Component: VFC = () => (
  <FabricCanvasContainer.Provider>
    <Canvas />
    <Toolbar />
  </FabricCanvasContainer.Provider>
);

export default Component;
