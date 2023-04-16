import { Component } from '@angular/core';
import { Emploi } from './models/Emploi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPemployee';
  listeEmploi:Emploi []=[
    { reference :"01",
      titre:"Coach ", 
      entreprise:"EY",
      etat:true},
      { reference: "2", titre: 'Ingénieur logiciel',entreprise: 'Microsoft',   etat: false },
      { reference: "3",  titre: 'Designer UI/UX',entreprise: 'Apple',  etat: true },
      { reference:"4" ,  titre: 'Analyste de données',entreprise: 'Amazon',  etat: false },
    
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
