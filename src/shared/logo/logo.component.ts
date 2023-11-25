import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SvgIconComponent, SvgIconRegistryService} from "angular-svg-icon";

@Component({
  selector: 'logo',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit {
  private svgIconRegistry = inject(SvgIconRegistryService);

  ngOnInit() {
    this.svgIconRegistry.loadSvg('/assets/zanjanlug-logo.svg', 'zlug-logo')
  }
}
