import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const headerAnimation = trigger('scrollHeader', [
  state(
    'visible',
    style({
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '10',
    }),
  ),
  state(
    'hidden',
    style({
      position: 'fixed',
      top: '-100px',
      left: '0',
      right: '0',
    }),
  ),
  state(
    'quickHide',
    style({
      position: 'fixed',
      top: '-100px',
      left: '0',
      right: '0',
    }),
  ),
  state(
    'static',
    style({
      position: 'absolute',
      top: '0',
      left: '16px',
      right: '16px',
    }),
  ),
  transition('visible => hidden', [animate('300ms ease-in')]),
  transition('hidden => visible', [animate('300ms ease-out')]),
  transition('quickHide => hidden', []),
]);
