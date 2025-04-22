import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { close, closeCircle, pin } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {
    addIcons({ close, closeCircle, pin });
  }

}
