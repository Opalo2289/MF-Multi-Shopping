import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonsLibService } from 'src/lib/commons-lib.service';
import { IProductCard } from '../models/product-card.interface';
import PubSub from 'pubsub-js'; //libreria para comunicacion de los proyectos
@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product?: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    PubSub.publish('products', this.product)//Publicar y suscribir
   }
}
