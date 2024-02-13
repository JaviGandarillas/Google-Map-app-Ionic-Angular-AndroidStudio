import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPage implements OnInit {
  private mapElement?: HTMLElement;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    
    // Inicializa el mapa después de que la vista se haya inicializado
    setTimeout(() => {
      this.initMap();
    },  0);
  }

  private async initMap() {
    this.mapElement = document.getElementById('map') as HTMLElement;
    if (this.mapElement) {
      const newMap = await GoogleMap.create({
        id: 'map',
        element: this.mapElement,
        apiKey: 'AIzaSyBE4VptpYrRKhn10V5Ss_b5AkuyKIhtZbk', // Pass the variable to the create method
        config: {
          center: {
            lat: 33.6,
            lng: -117.9,
          },
          zoom: 8,
        },
      });
    } else {
      console.error('Map element not found');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pronto podrás acceder al mapa',
      subHeader: 'Muy pronto',
      message: 'Ya casi',
      buttons: ['OK'],
    });

    await alert.present();
  }

  openMap() {
    console.log('funciona el');
  }
}
