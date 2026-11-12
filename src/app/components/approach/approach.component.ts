import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { BandComponent } from '../band/band.component';

export interface ApproachContent {
    eyebrow: string;
    title: string;
    lead: string;
    columns: Array<{ title: string; subtitle: string; steps: string[]; artifact: string; highlight?: boolean }>;
    timeline: Array<{ label: string; title: string; text: string }>;
    m1Label: string;
    m1Title: string;
    m1Text: string;
    plugLabel: string;
    plugTitle: string;
    plugLead: string;
    layers: Array<{ title: string; text: string }>;
    closing: string;
}

@Component({
    selector: 'app-approach',
    standalone: true,
    imports: [BandComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <!-- 1 · Algo-driven, not data-driven -->
    <app-band
      color="#1D3557" ink="#F3F1E7"
      image="img/sections/company_departments_bubbles.png"
      [imageAlt]="c().title"
      [label]="c().eyebrow" [title]="c().title" [text]="c().lead"
    >
      <div band-below class="below">
        <div class="cols">
          @for (col of c().columns; track col.title) {
            <div class="col" [class.hl]="col.highlight">
              <h3 class="col-title">{{ col.title }}</h3>
              <p class="col-sub">{{ col.subtitle }}</p>
              <ol class="col-steps">
                @for (s of col.steps; track $index) {
                  <li><span class="n">{{ $index + 1 }}</span>{{ s }}</li>
                }
              </ol>
              <p class="col-artifact">{{ col.artifact }}</p>
            </div>
          }
        </div>
        <div class="timeline">
          @for (t of c().timeline; track t.label; let last = $last) {
            <div class="t" [class.now]="last">
              <span class="t-label">{{ t.label }}</span>
              <h4 class="t-title">{{ t.title }}</h4>
              <p class="t-text">{{ t.text }}</p>
            </div>
          }
        </div>
      </div>
    </app-band>

    <!-- 2 · M1 -->
    <app-band
      color="#E85D04" ink="#1a1a1a" bracketColor="#1a1a1a" reverse
      image="img/sections/sticker_bot_head_jaime_AGI.png"
      [imageAlt]="c().m1Title"
      [label]="c().m1Label" [title]="c().m1Title" [text]="c().m1Text"
    />

    <!-- 3 · Plug into Fractal -->
    <app-band
      color="#1a1a1a" ink="#F3F1E7"
      image="img/img-robotsconectados.png"
      [imageAlt]="c().plugTitle"
      [label]="c().plugLabel" [title]="c().plugTitle" [text]="c().plugLead"
    >
      <div band-below class="below">
        <div class="layers">
          @for (l of c().layers; track l.title) {
            <div class="layer">
              <h3 class="layer-title">{{ l.title }}</h3>
              <p class="layer-text">{{ l.text }}</p>
            </div>
          }
        </div>
        <p class="closing">{{ c().closing }}</p>
      </div>
    </app-band>
  `,
    styles: [`
    :host { display: block; width: 100%; font-family: 'Inter', sans-serif; }
    .below { width: 100%; max-width: 1080px; display: flex; flex-direction: column; gap: var(--block-gap); }

    .cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .col { border: 1px solid rgba(243,241,231,0.25); border-radius: 14px; padding: 1.75rem; display: flex; flex-direction: column; }
    .col.hl { background: #F3F1E7; color: #1a1a1a; border-color: #F3F1E7; }
    .col-title { font-size: 1.4rem; font-weight: 700; margin: 0; }
    .col-sub { font-size: 0.95rem; opacity: 0.7; margin: 0.25rem 0 1.25rem; }
    .col-steps { list-style: none; margin: 0 0 1.25rem; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .col-steps li { display: flex; gap: 0.85rem; align-items: baseline; font-size: 1.05rem; line-height: 1.45; }
    .n { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.3rem; opacity: 0.6; min-width: 1rem; }
    .col.hl .n { color: var(--color-1, #E85D04); opacity: 1; }
    .col-artifact { margin: auto 0 0; padding-top: 1rem; border-top: 1px solid rgba(243,241,231,0.25); font-size: 1rem; line-height: 1.5; opacity: 0.9; }
    .col.hl .col-artifact { border-top-color: #d9d4c7; color: #3d3d3d; opacity: 1; }

    .timeline { display: grid; grid-template-columns: 1fr 1fr 1.4fr; gap: 1.25rem; }
    .t { border-top: 3px solid rgba(243,241,231,0.3); padding-top: 1rem; }
    .t.now { border-top-color: var(--color-1, #E85D04); }
    .t-label { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.1rem; letter-spacing: 0.08em; opacity: 0.75; }
    .t.now .t-label { color: var(--color-1, #E85D04); opacity: 1; }
    .t-title { font-size: 1.15rem; font-weight: 700; margin: 0.25rem 0 0.4rem; }
    .t-text { font-size: 0.98rem; line-height: 1.55; opacity: 0.85; margin: 0; }

    .layers { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
    .layer { background: #242424; border-radius: 14px; padding: 1.75rem 1.5rem; }
    .layer-title { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.6rem; }
    .layer-text { font-size: 1rem; line-height: 1.55; color: #cfcbbf; margin: 0; }
    .closing { font-size: 1.2rem; font-weight: 600; margin: 0; }

    @media (max-width: 900px) {
      .cols, .timeline, .layers { grid-template-columns: minmax(0, 1fr); }
    }
  `],
})
export class ApproachComponent {
    c = input.required<ApproachContent>({ alias: 'content' });
}
