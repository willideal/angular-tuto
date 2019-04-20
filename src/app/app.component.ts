import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  /*status =  'eteint' ? 'eteint' : 'allumer';*/
  constructor() {
  }
  onAllumer() {
    console.log('on allume tout');
  }
}
