import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  // app-product-alertsというselector はコンポーネントを識別します。 慣例では、Angularのコンポーネントセレクターはプレフィックス app- で始まり、その後にコンポーネント名が続きます。
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  
  // @Input() デコレーターは、プロパティの値が親コンポーネントである ProductListComponent から渡される
  @Input() product!: Product | undefined;

  @Output() notify = new EventEmitter();
}
