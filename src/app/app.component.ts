import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenOutletContexts, RouterOutlet} from '@angular/router';
import {fader} from "./route-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    fader
  ]
})
export class AppComponent {
  private contexts = inject(ChildrenOutletContexts);

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
