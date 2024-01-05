import { Component } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-quiz';

  products = PRODUCTS;
}
