import { Component, ChangeDetectionStrategy, input } from '@angular/core';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="ap">
      <div class="ap-inner">
        <p class="ap-eyebrow">{{ c().eyebrow }}</p>
        <h2 class="ap-title">{{ c().title }}</h2>
        <p class="ap-lead">{{ c().lead }}</p>

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

        <div class="m1">
          <span class="m1-label">{{ c().m1Label }}</span>
          <h3 class="m1-title">{{ c().m1Title }}</h3>
          <p class="m1-text">{{ c().m1Text }}</p>
        </div>

        <p class="ap-eyebrow">{{ c().plugLabel }}</p>
        <h3 class="plug-title">{{ c().plugTitle }}</h3>
        <p class="plug-lead">{{ c().plugLead }}</p>
        <div class="layers">
          @for (l of c().layers; track l.title) {
            <div class="layer">
              <h4 class="layer-title">{{ l.title }}</h4>
              <p class="layer-text">{{ l.text }}</p>
            </div>
          }
        </div>

        <p class="ap-closing">{{ c().closing }}</p>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .ap { background: #1a1a1a; color: #F3F1E7; padding: 104px 5% 120px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
    .ap-inner { width: 100%; max-width: 1080px; display: flex; flex-direction: column; }
    .ap-eyebrow { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.35rem; letter-spacing: 0.08em; color: var(--color-1, #E85D04); margin: 0 0 0.75rem; }
    .ap-title { font-family: 'Bebas Neue', Impact, sans-serif; font-weight: 400; font-size: clamp(3rem, 7vw, 5.5rem); line-height: 0.95; letter-spacing: 0.01em; margin: 0 0 1.5rem; }
    .ap-lead { font-size: 1.25rem; line-height: 1.6; color: #cfcbbf; max-width: 780px; margin: 0 0 3rem; }

    .cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .col { border: 1px solid #3a3a3a; border-radius: 14px; padding: 1.75rem; display: flex; flex-direction: column; }
    .col.hl { background: #F3F1E7; color: #1a1a1a; border-color: #F3F1E7; }
    .col-title { font-size: 1.4rem; font-weight: 700; margin: 0; }
    .col-sub { font-size: 0.95rem; color: #9a968b; margin: 0.25rem 0 1.25rem; }
    .col.hl .col-sub { color: #6b675e; }
    .col-steps { list-style: none; margin: 0 0 1.25rem; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .col-steps li { display: flex; gap: 0.85rem; align-items: baseline; font-size: 1.05rem; line-height: 1.45; }
    .n { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.3rem; color: #6b675e; min-width: 1rem; }
    .col.hl .n { color: var(--color-1, #E85D04); }
    .col-artifact { margin: auto 0 0; padding-top: 1rem; border-top: 1px solid #3a3a3a; font-size: 1rem; line-height: 1.5; color: #cfcbbf; }
    .col.hl .col-artifact { border-top-color: #d9d4c7; color: #3d3d3d; }

    .timeline { display: grid; grid-template-columns: 1fr 1fr 1.4fr; gap: 1.25rem; margin: 1.25rem 0 4.5rem; }
    .t { border-top: 3px solid #3a3a3a; padding-top: 1rem; }
    .t.now { border-top-color: var(--color-1, #E85D04); }
    .t-label { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.1rem; letter-spacing: 0.08em; color: #9a968b; }
    .t.now .t-label { color: var(--color-1, #E85D04); }
    .t-title { font-size: 1.15rem; font-weight: 700; margin: 0.25rem 0 0.4rem; }
    .t-text { font-size: 0.98rem; line-height: 1.55; color: #cfcbbf; margin: 0; }

    .m1 { background: var(--color-1, #E85D04); color: #1a1a1a; border-radius: 14px; padding: 2.25rem 2rem; margin-bottom: 4.5rem; }
    .m1-label { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.15rem; letter-spacing: 0.08em; }
    .m1-title { font-size: clamp(1.5rem, 2.6vw, 2.1rem); font-weight: 700; line-height: 1.2; margin: 0.35rem 0 0.75rem; }
    .m1-text { font-size: 1.1rem; line-height: 1.55; margin: 0; max-width: 760px; }

    .plug-title { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.15; margin: 0 0 0.75rem; }
    .plug-lead { font-size: 1.1rem; line-height: 1.6; color: #cfcbbf; margin: 0 0 2rem; max-width: 780px; }
    .layers { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
    .layer { background: #242424; border-radius: 14px; padding: 1.75rem 1.5rem; }
    .layer-title { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.6rem; }
    .layer-text { font-size: 1rem; line-height: 1.55; color: #cfcbbf; margin: 0; }

    .ap-closing { font-size: 1.2rem; font-weight: 600; margin: 3.5rem 0 0; color: #F3F1E7; }

    @media (max-width: 900px) {
      .ap { padding: 80px 6% 96px; }
      .cols, .timeline, .layers { grid-template-columns: minmax(0, 1fr); }
    }
  `],
})
export class ApproachComponent {
    c = input.required<ApproachContent>({ alias: 'content' });
}
