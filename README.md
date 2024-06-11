# geolocation-plugin

Geolocation plugin in Android

## Install

```bash
npm install geolocation-plugin
npx cap sync
```

## API

<docgen-index>

* [`getCorrentPosition(...)`](#getcorrentposition)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCorrentPosition(...)

```typescript
getCorrentPosition(options?: GeolocationOptions | undefined) => Promise<Position>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#geolocationoptions">GeolocationOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#position">Position</a>&gt;</code>

--------------------


### Interfaces


#### Position

| Prop            | Type                                                |
| --------------- | --------------------------------------------------- |
| **`coords`**    | <code><a href="#coordinates">Coordinates</a></code> |
| **`timestamp`** | <code>number</code>                                 |


#### Coordinates

| Prop                   | Type                        |
| ---------------------- | --------------------------- |
| **`latitude`**         | <code>number</code>         |
| **`longitude`**        | <code>number</code>         |
| **`accuracy`**         | <code>number</code>         |
| **`altitudeAccuracy`** | <code>number \| null</code> |
| **`altitude`**         | <code>number \| null</code> |
| **`speed`**            | <code>number \| null</code> |
| **`heading`**          | <code>number \| null</code> |


#### GeolocationOptions

| Prop                     | Type                 |
| ------------------------ | -------------------- |
| **`enableHighAccuracy`** | <code>boolean</code> |
| **`timeout`**            | <code>number</code>  |
| **`maximumAge`**         | <code>number</code>  |

</docgen-api>
