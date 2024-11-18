import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../shared/cupcake.model';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {
  cupcake: Cupcake | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCupcakeById(id).subscribe((data) => {
        this.cupcake = data;
        console.log(data);
      });
    }
  }
}
