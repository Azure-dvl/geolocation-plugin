import { WebPlugin } from '@capacitor/core';

import type { GeolocationPlugin, GeolocationOptions, Position } from './definitions';

export class GeolocationWeb extends WebPlugin implements GeolocationPlugin {
  async getCorrentPosition(options?: GeolocationOptions): Promise<Position> {
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            (pos)=>{
                resolve({
                    coords:pos.coords,
                    timestamp:pos.timestamp
                });
            },
            (err)=>reject(err),
            options
        );
    });
}
}
