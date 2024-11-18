import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../shared/cupcake.model';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { CommonModule } from '@angular/common';

export interface Accessory {
  id: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})

export class CupcakeDetailsComponent {
  cupcake: Cupcake | undefined;
  accessory: Accessory | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCupcakeById(id).subscribe((data) => {
        this.cupcake = data;
        console.log(data);
        // Si le cupcake a un accessoire_id, récupérer l'accessoire associé
        if (this.cupcake.accessory_id) {
          this.apiService.getAccessoryById(this.cupcake.accessory_id).subscribe((accessoryData) => {
            this.accessory = accessoryData;
            console.log(accessoryData);  // Affiche l'accessoire dans la console
          });
        }
      });
    }
  }
}
