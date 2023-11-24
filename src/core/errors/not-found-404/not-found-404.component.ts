import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SvgIconComponent, SvgIconRegistryService} from "angular-svg-icon";
import {LocalizationPipe} from "../../pipes/localization.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found-404',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, LocalizationPipe, RouterLink],
  templateUrl: './not-found-404.component.html',
  styleUrl: './not-found-404.component.scss'
})
export class NotFound404Component implements OnInit {
  private svgIconRegistry = inject(SvgIconRegistryService)

  ngOnInit() {
    this.svgIconRegistry.loadSvg("/assets/error-icons/error-404.svg", "error-404");
  }
}
