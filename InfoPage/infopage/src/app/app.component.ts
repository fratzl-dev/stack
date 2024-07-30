import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from "./item-card/item-card.component";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemCardComponent, ButtonModule, TableModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infopage';

  products: Product[] = [
    { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
    { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
    { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 },
    { code: 'P004', name: 'Product 4', category: 'Category 4', quantity: 40 }
  ];

}
