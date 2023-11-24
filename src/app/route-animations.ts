import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const fader = trigger('routeAnimations', [
  transition("* <=> *", [
    style({position: 'relative'}),
    query(":enter, :leave", [
      style({
        position: 'absolute',
      })
    ]),
    query(":enter", [
      style({
        opacity: '0',
        transform: 'scale(0.99)'
      })
    ]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("300ms ease-out", style({
          opacity: '0',
          transform: 'scale(0.99)'
        }))
      ]),
      query(":enter", [
        animate("300ms ease-out", style({
          opacity: '1',
          transform: 'scale(1)'
        }))
      ])
    ]),
    query(":enter", animateChild()),
  ])
]);

