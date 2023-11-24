import {Component, ComponentFactoryResolver, inject, ViewChild, ViewContainerRef} from '@angular/core';
import {
  ChildrenOutletContexts,
  Event, NavigationCancel,
  NavigationEnd, NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterState
} from '@angular/router';
import {routeAnimations_fader} from "./app.animations";
import {filter} from "rxjs";
import {LoadingComponent} from "../shared/loading/loading.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    routeAnimations_fader
  ]
})
export class AppComponent {
  private contexts = inject(ChildrenOutletContexts);
  private router = inject(Router);

  @ViewChild('loadingContainer', {read: ViewContainerRef}) loadingContainerRef: ViewContainerRef | undefined;

  duringRoute: boolean = false;

  constructor() {
    this.router.events
      .pipe(
        filter((routerEvent: Event | RouterEvent): routerEvent is RouterEvent => routerEvent instanceof RouterEvent)
      )
      .subscribe((routerEvent) => {
        switch (true) {
          case routerEvent instanceof NavigationStart:
            this.duringRoute = true;
            this.makeLoadingComponentVisible();
            break;

          case routerEvent instanceof NavigationEnd:
          case routerEvent instanceof NavigationError:
          case routerEvent instanceof NavigationCancel:
            this.duringRoute = false;
            this.makeLoadingComponentHide();
            break;

          default:
            break;
        }
      });
  }

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  private makeLoadingComponentVisible() {
    this.loadingContainerRef?.createComponent(LoadingComponent);
  }

  private makeLoadingComponentHide() {
    setTimeout(() => this.loadingContainerRef?.clear(), 300);
  }
}
