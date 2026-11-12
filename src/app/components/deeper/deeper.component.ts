import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

export interface DeeperTile {
    title: string;
    teaser: string;
    image: string;
    imageAlt: string;
    color: string;
    content: string;
}

@Component({
    selector: 'app-deeper',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="deeper" aria-labelledby="deeper-title">
      <div class="deeper-inner">
        <p class="deeper-label">{{ label() }}</p>
        <h2 class="deeper-title" id="deeper-title">{{ title() }}</h2>
        <p class="deeper-lead">{{ lead() }}</p>
        <ul class="tiles">
          @for (tile of tiles(); track tile.title) {
            <li>
              <button type="button" class="tile" (click)="open.emit({ title: tile.title, content: tile.content, color: tile.color })">
                <span class="tile-img" [style.background-color]="tile.color">
                  <img [src]="tile.image" [alt]="tile.imageAlt" loading="lazy" />
                </span>
                <span class="tile-body">
                  <span class="tile-title">{{ tile.title }}</span>
                  <span class="tile-teaser">{{ tile.teaser }}</span>
                  <span class="tile-more">{{ moreLabel() }} →</span>
                </span>
              </button>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; width: 100%; scroll-snap-align: start; }
    .deeper { background: #F3F1E7; color: #1a1a1a; padding: var(--section-y) var(--section-x); display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
    .deeper-inner { width: 100%; max-width: 1180px; }
    .deeper-label { font-family: 'Bebas Neue', Impact, sans-serif; font-size: 1.35rem; letter-spacing: 0.08em; color: var(--color-1, #E85D04); margin: 0 0 0.5rem; }
    .deeper-title { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 700; line-height: 1.15; margin: 0 0 0.75rem; }
    .deeper-lead { font-size: 1.1rem; line-height: 1.6; color: #3d3d3d; margin: 0 0 2.5rem; max-width: 760px; }
    .tiles { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
    .tile { width: 100%; height: 100%; text-align: left; background: #FFFFFF; border: 1px solid #E2DED1; border-radius: 14px; padding: 0; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; font: inherit; color: inherit; transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .tile:hover, .tile:focus-visible { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); }
    .tile:focus-visible { outline: 2px solid var(--color-1, #E85D04); outline-offset: 2px; }
    .tile-img { display: flex; align-items: center; justify-content: center; height: 130px; padding: 1rem; }
    .tile-img img { max-width: 100%; max-height: 100%; object-fit: contain; }
    .tile-body { display: flex; flex-direction: column; gap: 0.4rem; padding: 1rem 1.1rem 1.25rem; flex: 1; }
    .tile-title { font-size: 1.05rem; font-weight: 700; line-height: 1.25; }
    .tile-teaser { font-size: 0.92rem; line-height: 1.5; color: #4a4a4a; flex: 1; }
    .tile-more { font-size: 0.85rem; font-weight: 600; color: var(--color-1, #E85D04); margin-top: 0.4rem; }
    @media (max-width: 1100px) { .tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 700px) { .tiles { grid-template-columns: minmax(0, 1fr); } .tile { flex-direction: row; } .tile-img { width: 110px; height: auto; flex: none; } }
  `],
})
export class DeeperComponent {
    label = input.required<string>();
    title = input.required<string>();
    lead = input.required<string>();
    moreLabel = input.required<string>();
    tiles = input.required<DeeperTile[]>();
    open = output<{ title: string; content: string; color: string }>();
}
