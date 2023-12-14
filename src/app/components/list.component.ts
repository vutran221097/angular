import { Component } from '@angular/core';
import { ItemComponent } from './item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <h1>List Item</h1>
    <ul>
      <app-item></app-item>
    </ul>
  `,
})
export class ListComponent {
  title = 'list';
}
