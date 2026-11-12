import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export interface TrainingContent {
    label: string;
    title: string;
    lead: string;
    audiences: Array<{ who: string; title: string; text: string }>;
}

export interface WaysContent {
    doorsLabel: string;
    doors: Array<{ title: string; text: string }>;
    modesLabel: string;
    modes: Array<{ title: string; text: string }>;
    closing: string;
}

@Component({
    selector: 'app-training',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="tr" [attr.aria-label]="w().doorsLabel">
      <div class="tr-inner">
        <div class="block">
          <p class="bracket-label">{{ w().doorsLabel }}</p>
          <div class="doors">
            @for (door of w().doors; track door.title) {
              <div class="door">
                <h3 class="door-title">{{ door.title }}</h3>
                <p class="door-text">{{ door.text }}</p>
              </div>
            }
          </div>
        </div>

        <div class="block">
          <p class="bracket-label">{{ w().modesLabel }}</p>
          <div class="modes">
            @for (mode of w().modes; track mode.title) {
              <div class="mode">
                <h3 class="mode-title">{{ mode.title }}</h3>
                <p class="mode-text">{{ mode.text }}</p>
              </div>
            }
          </div>
          <p class="closing">{{ w().closing }}</p>
        </div>

      </div>
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .tr { background: #f4f1ea; color: #1a1a1a; padding: var(--section-y) var(--section-x); display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
    .tr-inner { width: 100%; max-width: 1080px; display: flex; flex-direction: column; gap: var(--block-gap); }
    .block { display: flex; flex-direction: column; }


    .doors { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .door { background: #1a1a1a; color: #F3F1E7; border-radius: 14px; padding: 2rem; }
    .door-title { font-size: 1.3rem; font-weight: 700; margin: 0 0 0.75rem; }
    .door-text { font-size: 1.05rem; line-height: 1.6; color: #cfcbbf; margin: 0; }

    .modes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
    .mode { border-left: 3px solid var(--color-1, #E85D04); padding-left: 1.25rem; }
    .mode-title { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem; }
    .mode-text { font-size: 1.02rem; line-height: 1.6; color: #3d3d3d; margin: 0; }
    .closing { font-size: 1.05rem; line-height: 1.6; color: #3d3d3d; margin: 2rem 0 0; }


    @media (max-width: 900px) {
      .doors, .modes { grid-template-columns: minmax(0, 1fr); }
    }
  `],
})
export class TrainingComponent {
    w = input.required<WaysContent>({ alias: 'ways' });
}
