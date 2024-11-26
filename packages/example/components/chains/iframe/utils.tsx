import React from 'react';
import { JsBridgeIframe } from '@chargerwallet/cross-inpage-provider-core';
import { IJsonRpcRequest } from '@chargerwallet/cross-inpage-provider-types';

export async function sendMethod(
  { method, params }: IJsonRpcRequest,
  bridge?: JsBridgeIframe,
): Promise<void> {
  try {
    const result = await bridge?.request({
      scope: '$hardware_sdk',
      data: {
        method,
        params,
      },
    });
    console.log('result >>>>', method, ' --> ', result);
  } catch (e) {
    console.error('bridge send ERROR response: ', method, ' --> ', e);
  }
}