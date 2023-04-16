import { Component } from '@angular/core';
import { Emploi } from '../models/Emploi';

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
    etat:true}
 
  ];

    public OffreDispo(): number {
  let nbroffreDispo = 0;
  for (let i = 0; i < this.listeEmploi.length; i++) {
    if (this.listeEmploi[i].etat) {
      nbroffreDispo++;
    }
  }
  return nbroffreDispo;
}
filteredListeEmploi: Emploi[] = [];
searchValue = '';

filterEmploi() {
  this.filteredListeEmploi = this.listeEmploi.filter(
    (emploi) => emploi.entreprise.toLowerCase().includes(this.searchValue.toLowerCase())
  );
}
}
