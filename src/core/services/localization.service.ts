import {Injectable} from '@angular/core';
import {fa} from './locale/fa'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() {
  }

  get(locale: "fa", path: string): Observable<string | null> {
    return new Observable(observer => {
      if (locale == "fa") {
        observer.next(
          path
            .split('.')
            .filter(_path => !!_path.trim())
            .reduce((prev, curr) => prev?.[curr], fa).toString()
        );
        observer.complete();
      }

      observer.next(null);
      observer.complete();
    })
  }
}
