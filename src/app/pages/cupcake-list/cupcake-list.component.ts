import { Component } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';

import { OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../shared/cupcake.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakes: Cupcake[] = []; // Stocke les données des cupcakes

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Récupération des données depuis l'API
    this.apiService.getCupcakes().subscribe((data) => {
      this.cupcakes = data;
      console.log(data);
    });
  }
  // Step 3: get all accessories

}

// console.log(data); :
// [
//   {
//       "id": "1",
//       "accessory_id": "3",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "red",
//       "name": "Austria"
//   },
//   {
//       "id": "2",
//       "accessory_id": "3",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
//       "color1": "black",
//       "color2": "yellow",
//       "color3": "red",
//       "name": "Belgium"
//   },
//   {
//       "id": "3",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "red",
//       "color2": "green",
//       "color3": "white",
//       "name": "Bulgaria"
//   },
//   {
//       "id": "4",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "blue",
//       "name": "Croatia"
//   },
//   {
//       "id": "5",
//       "accessory_id": "3",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
//       "color1": "white",
//       "color2": "white",
//       "color3": "white",
//       "name": "Cyprus"
//   },
//   {
//       "id": "6",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "red",
//       "color2": "blue",
//       "color3": "white",
//       "name": "Czechia"
//   },
//   {
//       "id": "7",
//       "accessory_id": "5",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/christmas-candy.png",
//       "color1": "red",
//       "color2": "red",
//       "color3": "white",
//       "name": "Denmark"
//   },
//   {
//       "id": "8",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "white",
//       "color2": "black",
//       "color3": "blue",
//       "name": "Estonia"
//   },
//   {
//       "id": "9",
//       "accessory_id": "5",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/christmas-candy.png",
//       "color1": "white",
//       "color2": "white",
//       "color3": "blue",
//       "name": "Finland"
//   },
//   {
//       "id": "10",
//       "accessory_id": "4",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/wcs.png",
//       "color1": "blue",
//       "color2": "white",
//       "color3": "red",
//       "name": "France"
//   },
//   {
//       "id": "11",
//       "accessory_id": "4",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/wcs.png",
//       "color1": "yellow",
//       "color2": "red",
//       "color3": "black",
//       "name": "Germany"
//   },
//   {
//       "id": "12",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "white",
//       "color2": "blue",
//       "color3": "white",
//       "name": "Greece"
//   },
//   {
//       "id": "13",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "green",
//       "name": "Hungary"
//   },
//   {
//       "id": "14",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "orange",
//       "color2": "white",
//       "color3": "green",
//       "name": "Ireland"
//   },
//   {
//       "id": "15",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "green",
//       "name": "Italy"
//   },
//   {
//       "id": "16",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "red",
//       "name": "Latvia"
//   },
//   {
//       "id": "17",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "yellow",
//       "color2": "green",
//       "color3": "red",
//       "name": "Lithuania"
//   },
//   {
//       "id": "18",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "blue",
//       "name": "Luxembourg"
//   },
//   {
//       "id": "19",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "red",
//       "color2": "red",
//       "color3": "white",
//       "name": "Malta"
//   },
//   {
//       "id": "20",
//       "accessory_id": "5",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/christmas-candy.png",
//       "color1": "red",
//       "color2": "white",
//       "color3": "blue",
//       "name": "Netherlands"
//   },
//   {
//       "id": "21",
//       "accessory_id": "1",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/cherry.png",
//       "color1": "white",
//       "color2": "white",
//       "color3": "red",
//       "name": "Poland"
//   },
//   {
//       "id": "22",
//       "accessory_id": "4",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/wcs.png",
//       "color1": "red",
//       "color2": "red",
//       "color3": "green",
//       "name": "Portugal"
//   },
//   {
//       "id": "23",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "red",
//       "color2": "yellow",
//       "color3": "blue",
//       "name": "Romania"
//   },
//   {
//       "id": "24",
//       "accessory_id": "2",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
//       "color1": "white",
//       "color2": "blue",
//       "color3": "red",
//       "name": "Slovakia"
//   },
//   {
//       "id": "25",
//       "accessory_id": "3",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
//       "color1": "white",
//       "color2": "blue",
//       "color3": "red",
//       "name": "Slovenia"
//   },
//   {
//       "id": "26",
//       "accessory_id": "4",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/wcs.png",
//       "color1": "red",
//       "color2": "yellow",
//       "color3": "red",
//       "name": "Spain"
//   },
//   {
//       "id": "27",
//       "accessory_id": "5",
//       "url": "http://images.innoveduc.fr/php_parcours/cp2/christmas-candy.png",
//       "color1": "yellow",
//       "color2": "blue",
//       "color3": "blue",
//       "name": "Sweden"
//   }
// ]

