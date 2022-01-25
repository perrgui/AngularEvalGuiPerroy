import { Component } from '@angular/core';
import { statistique } from 'src/models/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'AngEval-Gui-PERROY';
  stat1: statistique = {
    id: 'cfa35330-7db6-11ec',
    titre: 'la jolie région du limousin',
    valeur: '50M',
  };
}
