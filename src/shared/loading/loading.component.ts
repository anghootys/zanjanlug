import {Component, inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconComponent, SvgIconRegistryService} from "angular-svg-icon";
import {LocalizationPipe} from "../../core/pipes/localization.pipe";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'loading',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, LocalizationPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('loadingAnimation', [
      state('in', style({opacity: '0', transform: 'scale(0.99)'})),
      transition(":enter", [
        style({opacity: '0', transform: 'scale(0.99)'}),
        animate(300, style({opacity: '1', transform: 'scale(1)'}))
      ]),
      transition(":leave", [
        animate(300, style({opacity: '0', transform: 'scale(0.99)'}))
      ])
    ])
  ],
  host: {'[@loadingAnimation]': 'in'}
})
export class LoadingComponent implements OnInit, OnDestroy {
  private svgIconRegistry = inject(SvgIconRegistryService);
  private randomColorCodeGenerationInterval: any = null;

  randomColorCode = "#1b9f85";

  ngOnInit() {
    this.svgIconRegistry.loadSvg("/assets/linux-logo.svg", "linux-logo");

    this.randomColorCodeGenerationInterval = setInterval(() => this.randomColorCode = this.generateRandomColorCode(), 2500);
  }

  private generateRandomColorCode() {
    let red: number, green: number, blue: number;

    red = Math.floor(Math.random() * 130);
    green = Math.floor(Math.random() * 130);
    blue = Math.floor(Math.random() * 130);

    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`
  }

  ngOnDestroy() {
    clearInterval(this.randomColorCodeGenerationInterval);
  }
}
