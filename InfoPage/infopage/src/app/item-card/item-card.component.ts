import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CardModule, ImageModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;

}
