import { Component, ChangeDetectionStrategy, input, booleanAttribute } from '@angular/core';

/**
 * Full-width coloured band with a large illustration, text on one side and the
 * picture on the other. Alternate `reverse` between consecutive bands.
 */
@Component({
    selector: 'app-band',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="band" [style.background-color]="color()" [style.color]="ink()" [attr.aria-label]="title()">
      <div class="band-inner" [class.reverse]="reverse()">
        <div class="band-text">
          @if (label()) { <p class="bracket-label band-label" [style.--bracket-color]="bracketColor()">{{ label() }}</p> }
          @if (level() === 3) {
            <h3 class="band-title">{{ title() }}</h3>
          } @else {
            <h2 class="band-title">{{ title() }}</h2>
          }
          @if (text()) { <p class="band-body">{{ text() }}</p> }
          <ng-content />
        </div>
        @if (image()) {
          <div class="band-media">
            <img [src]="image()" [alt]="imageAlt()" />
          </div>
        }
      </div>
      <ng-content select="[band-below]" />
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .band { padding: var(--section-y) var(--section-x); display: flex; flex-direction: column; align-items: center; gap: var(--block-gap); font-family: 'Inter', sans-serif; }
    .band-inner { width: 100%; max-width: 1080px; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 64px; align-items: center; }
    .band-inner.reverse .band-text { order: 2; }
    .band-inner.reverse .band-media { order: 1; }
    .band-label { --bracket-text: currentColor; opacity: 0.85; margin-bottom: 1rem; }
    .band-title { font-family: 'Bebas Neue', Impact, sans-serif; font-weight: 400; font-size: clamp(2.6rem, 5vw, 4.2rem); line-height: 0.95; letter-spacing: 0.01em; margin: 0 0 1.25rem; }
    .band-body { font-size: 1.2rem; line-height: 1.65; margin: 0; opacity: 0.92; max-width: 560px; }
    .band-media { display: flex; justify-content: center; }
    .band-media img { width: 100%; max-width: 440px; height: auto; filter: drop-shadow(0 18px 30px rgba(0,0,0,0.18)); }
    @media (max-width: 900px) {
      .band-inner, .band-inner.reverse { grid-template-columns: minmax(0, 1fr); gap: 32px; }
      .band-inner .band-media, .band-inner.reverse .band-media { order: 0; }
      .band-inner .band-text, .band-inner.reverse .band-text { order: 1; }
      .band-media img { max-width: 300px; }
      .band-body { font-size: 1.08rem; }
    }
  `],
})
export class BandComponent {
    color = input<string>('#1a1a1a');
    ink = input<string>('#F3F1E7');
    image = input<string>('');
    imageAlt = input<string>('');
    label = input<string>('');
    title = input.required<string>();
    text = input<string>('');
    level = input<2 | 3>(2);
    reverse = input(false, { transform: booleanAttribute });
    /** Colour of the [ ] brackets; orange by default, the text colour on bands where orange would not read. */
    bracketColor = input<string>('var(--color-1, #E85D04)');
}
