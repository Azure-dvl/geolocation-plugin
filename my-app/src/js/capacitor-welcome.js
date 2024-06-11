import { Geolocation } from '../../../src/geolocation-plugin';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      // Create a button to trigger geolocation
      const button = document.createElement('ion-button');
      button.innerHTML = 'Get Location';
      button.onclick = async () => {
        try {
          const position = await Geolocation.getCurrentPosition(); 

          console.log('Location:', position);


          document.getElementById('location-output').innerText = `
            Latitude: ${position.coords.latitude}\n
            Longitude: ${position.coords.longitude}
          `; 
        } catch (error) {
          console.error('Error getting location:', error);
        }
      };
      this.appendChild(button);
    }
  }
);

