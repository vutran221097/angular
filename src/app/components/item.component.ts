import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  template: ` <h1>hehe</h1> `,
})
export class ItemComponent {
  title = 'item';
}
