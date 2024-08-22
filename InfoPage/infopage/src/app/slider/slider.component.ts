import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../services/slider-cards.service';



export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'slider',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers: [ProductService]
})
export class SliderComponent{
  @Input() title!: string;
  @Input({ required: true }) data!: string;

  products!: Product[];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

 

  ngOnInit() {
    console.log(this.data);
    if(this.data === 'Education')
    {
        this.productService.getEducation().then((products) => {
            this.products = products;
        });
    }
    if (this.data === 'Employers') {
        this.productService.getEmployers().then((products) => {
            this.products = products;
        });
    } else {
        console.log('error');
    }
      

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default: 
              return undefined;
      }
  }
}


