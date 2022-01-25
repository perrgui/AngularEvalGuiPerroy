import { Component } from '@angular/core';
import { statistique } from 'src/models/model';
// import { tabStat } from 'src/app/statistique/statistique.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStat!: statistique[];
  // title = 'AngEval-Gui-PERROY';
  stat1: statistique = {
    id: 'cfa35330-7db6-11ec',
    titre: 'la jolie région du limousin',
    valeur: '50M',
  };
  stat2: statistique = {
    id: 'cfa3533fdg0-7db6-11ec',
    titre: 'la jolie région du bouchonois',
    valeur: '30M',
  };
}
