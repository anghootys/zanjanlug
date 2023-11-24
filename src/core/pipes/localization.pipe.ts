import {inject, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {LocalizationService} from "../services/localization.service";
import {Subscription} from "rxjs";

@Pipe({
  name: 'localization',
  standalone: true,
  pure: false
})
export class LocalizationPipe implements PipeTransform, OnDestroy {
  private localizationService = inject(LocalizationService);
  private _path: string | null = null;
  private value: string | null = null;
  private subscriptions: Subscription[] = [];

  transform(path: string, locale: "fa" = "fa"): string | null {
    if (path !== this._path) {
      this._path = path;

      this.subscriptions.push(this.localizationService.get(locale, path).subscribe(value => this.value = value))
    }

    return this.value;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
