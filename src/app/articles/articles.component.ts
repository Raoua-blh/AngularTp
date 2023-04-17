import { Component } from '@angular/core';
import { Article } from '../models/Aritcle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  titre = "Les articles du jour";
  listeArticles: Article[] = [
    {
      titre: "Championat du Monde ",
      contenu: "Championat du Monde estt ...",
      auteur: "Med Taher",
      date: "12/01/2220",
      categorie: "Sport"
    },
    {
      titre: "New Parents",
      contenu: "this new experience ptati patat",
      auteur: "Ahmedd",
      date: "01/2/2023",
      categorie: "Education"
    },
    {
      titre: "how to write your CV",
      contenu: "POUR REUSSIR A DECRAUCHER UN EMPLOI",
      auteur: "mARIE Elsa ",
      date: "16/04/2023",
      categorie: "Travail"
    }
  ];
  totalArticlesDisplayed: number = this.listeArticles.length;
  
  isDisplayedValid(): boolean {
    return this.totalArticlesDisplayed <= this.listeArticles.length;
  }

}
