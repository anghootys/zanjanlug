import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() isClosed: boolean = true;
}
