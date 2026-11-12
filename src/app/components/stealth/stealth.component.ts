import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
    selector: 'app-stealth',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="stealth" aria-labelledby="stealth-title">
      <div class="stealth-inner">
        <p class="stealth-label">{{ label() }}</p>
        <h2 class="stealth-title" id="stealth-title">{{ title() }}</h2>
        <p class="stealth-text">{{ text() }}</p>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .stealth { background: #1a1a1a; color: #F3F1E7; padding: 96px 5%; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
    .stealth-inner { width: 100%; max-width: 860px; text-align: center; }
    .stealth-label { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.35rem; letter-spacing: 0.08em; color: var(--color-1, #E85D04); margin: 0 0 0.75rem; }
    .stealth-title { font-family: 'Bebas Neue', Impact, sans-serif; font-weight: 400; font-size: clamp(2.8rem, 6vw, 4.5rem); line-height: 0.95; margin: 0 0 1.5rem; }
    .stealth-text { font-size: 1.2rem; line-height: 1.7; color: #cfcbbf; margin: 0; }
    @media (max-width: 700px) { .stealth { padding: 72px 6%; } .stealth-text { font-size: 1.08rem; } }
  `],
})
export class StealthComponent {
    label = input.required<string>();
    title = input.required<string>();
    text = input.required<string>();
}
