import { Component ,OnInit} from '@angular/core';
import { Emploi } from '../models/Emploi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  listeEmploi:Emploi []=[
    { reference :"01",
      titre:"Coach ", 
      entreprise:"EY",
      etat:true},
      { reference: "2", titre: 'Ingénieur logiciel',entreprise: 'Microsoft',   etat: false },
      { reference: "3",  titre: 'Designer UI/UX',entreprise: 'Apple',  etat: true },
      { reference:"4" ,  titre: 'Analyste de données',entreprise: 'Amazon',  etat: false },
    
    ];
    emploifilter!:string;
    ngOnInit(): void {
    this.getEmplois();
  }
  getEmplois(): void {
    this.listeEmploi;
  }
     nbroffreDispo = 0;
      public OffreDispo(): number {
        this.nbroffreDispo = 0; // reset the value to 0 before counting

    for (let i = 0; i < this.listeEmploi.length; i++) {
      
      if (this.listeEmploi[i].etat) {
      
        this.nbroffreDispo++;
      }
    }
    return this.nbroffreDispo;
  }

  searchValue :string = '';

  filterEmploi() {
    let filteredEmploi = this.listeEmploi.filter((listeEmploi) => {
      return listeEmploi.entreprise.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    return filteredEmploi;
  }
  
}
