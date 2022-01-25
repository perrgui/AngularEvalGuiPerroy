import { Component, OnInit } from '@angular/core';
import { statistique } from 'src/models/model';
import { setTimeout } from 'timers';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  stats!: statistique;
  tabStat!: statistique[];
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

  ngOnInit(): void {}

  constructor() {
    this.tabStat = [this.stat1, this.stat2];


 setTimeout (() => {
         this.tabStat.push( stat3{'azertyuiop','la jolie region du frigidaire','66m'})
      }, 1000);
}}
