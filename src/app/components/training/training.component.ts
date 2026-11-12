import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export interface TrainingContent {
    label: string;
    title: string;
    lead: string;
    audiences: Array<{ who: string; title: string; text: string }>;
    cta: string;
    ctaNote: string;
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
    <section class="tr" aria-labelledby="training-title">
      <div class="tr-inner">
        <div class="block head">
          <p class="bracket-label">{{ c().label }}</p>
          <h2 class="tr-title" id="training-title">{{ c().title }}</h2>
          <p class="tr-lead">{{ c().lead }}</p>
        </div>

        <ul class="audiences">
          @for (a of c().audiences; track a.title) {
            <li class="aud">
              <span class="aud-who">{{ a.who }}</span>
              <h3 class="aud-title">{{ a.title }}</h3>
              <p class="aud-text">{{ a.text }}</p>
            </li>
          }
        </ul>

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

        <div class="cta-row">
          <a class="cta" href="mailto:hello@41ops.com?subject=41OPS%20training%20programme">{{ c().cta }}</a>
          <span class="cta-note">{{ c().ctaNote }}</span>
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .tr { background: #F3F1E7; color: #1a1a1a; padding: var(--section-y) var(--section-x); display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
    .tr-inner { width: 100%; max-width: 1080px; display: flex; flex-direction: column; gap: var(--block-gap); }
    .block { display: flex; flex-direction: column; }
    .head .bracket-label { margin-bottom: 1rem; }
    .tr-title { font-family: 'Bebas Neue', Impact, sans-serif; font-weight: 400; font-size: clamp(2.8rem, 6vw, 4.6rem); line-height: 0.95; margin: 0 0 1rem; }
    .tr-lead { font-size: 1.2rem; line-height: 1.6; color: #3d3d3d; margin: 0; max-width: 780px; }

    .audiences { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
    .aud { background: #FFFFFF; border: 1px solid #E2DED1; border-radius: 14px; padding: 1.75rem 1.5rem 2rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .aud-who { align-self: flex-start; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; background: #F3F1E7; border-radius: 999px; padding: 0.25rem 0.75rem; }
    .aud-title { font-size: 1.3rem; font-weight: 700; margin: 0; }
    .aud-text { font-size: 1.02rem; line-height: 1.55; color: #3d3d3d; margin: 0; }

    .doors { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .door { background: #1a1a1a; color: #F3F1E7; border-radius: 14px; padding: 2rem; }
    .door-title { font-size: 1.3rem; font-weight: 700; margin: 0 0 0.75rem; }
    .door-text { font-size: 1.05rem; line-height: 1.6; color: #cfcbbf; margin: 0; }

    .modes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
    .mode { border-left: 3px solid var(--color-1, #E85D04); padding-left: 1.25rem; }
    .mode-title { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem; }
    .mode-text { font-size: 1.02rem; line-height: 1.6; color: #3d3d3d; margin: 0; }
    .closing { font-size: 1.05rem; line-height: 1.6; color: #3d3d3d; margin: 2rem 0 0; }

    .cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 1.5rem; }
    .cta { display: inline-block; background: var(--color-1, #E85D04); color: #FFFFFF; text-decoration: none; font-weight: 700; font-size: 1.1rem; padding: 1rem 1.75rem; border-radius: 999px; transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .cta:hover, .cta:focus-visible { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(232, 93, 4, 0.3); }
    .cta:focus-visible { outline: 2px solid #1a1a1a; outline-offset: 3px; }
    .cta-note { font-size: 0.98rem; color: #5a5a5a; }

    @media (max-width: 900px) {
      .audiences, .doors, .modes { grid-template-columns: minmax(0, 1fr); }
    }
  `],
})
export class TrainingComponent {
    c = input.required<TrainingContent>({ alias: 'content' });
    w = input.required<WaysContent>({ alias: 'ways' });
}
