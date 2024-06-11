export interface GeolocationPlugin{
  getCorrentPosition(options?: GeolocationOptions):Promise<Position>;
  
  // watchPosition(
  //     options:GeolocationOptions,
  //     callback: WatchCallback
  // ):Promise<string>;
  
  // clearWatch(options:{id:string}):Promise<void>;
}

export interface GeolocationOptions{
  enableHighAccuracy?:boolean;
  timeout?: number;
  maximumAge?:number;
}

export interface Position{
  coords:Coordinates;
  timestamp:number;
}

export interface Coordinates{
  latitude: number;
  longitude: number;
  accuracy: number;
  altitudeAccuracy: number | null | undefined;
  altitude: number | null ;
  speed: number | null;
  heading: number | null;
}

// export type WatchCallback = (position: Position, error?:GeolocationPositionError)=> void;

// export interface GeolocationPositionError{
//     code:number;
//     message:string;
// }