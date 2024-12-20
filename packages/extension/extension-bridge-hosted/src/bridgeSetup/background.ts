import { JsBridgeExtBackground } from '../JsBridgeExtBackground';
import { IJsBridgeReceiveHandler } from '@chargerwallet/cross-inpage-provider-types';

function createHostBridge({ receiveHandler }: { receiveHandler: IJsBridgeReceiveHandler }) {
  const bridge = new JsBridgeExtBackground({
    receiveHandler,
  });
  return bridge;
}

export default {
  createHostBridge,
};
