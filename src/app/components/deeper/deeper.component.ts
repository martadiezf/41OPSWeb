import { Component, ChangeDetectionStrategy, input, output, ElementRef, viewChild, afterNextRender, DestroyRef, inject } from '@angular/core';

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
        <p class="bracket-label">{{ label() }}</p>
        <h2 class="deeper-title" id="deeper-title">{{ title() }}</h2>
        <p class="deeper-lead">{{ lead() }}</p>
      </div>
      <div class="track" #track>
        <ul class="tiles" #row>
          @for (tile of tiles(); track tile.title) {
            <li>
              <button type="button" class="tile" (click)="open.emit({ title: tile.title, content: tile.content, color: tile.color })">
                <span class="tile-img" [style.background-color]="tile.color">
                  <img [src]="tile.image" [alt]="tile.imageAlt" />
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
    .deeper { background: #f4f1ea; color: #1a1a1a; padding: var(--section-y) 0; font-family: 'Inter', sans-serif; overflow-x: clip; }
    .deeper-inner { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 var(--section-x); box-sizing: border-box; }
    .deeper .bracket-label { margin-bottom: 1rem; }
    .deeper-title { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 700; line-height: 1.15; margin: 0 0 0.75rem; }
    .deeper-lead { font-size: 1.1rem; line-height: 1.6; color: #3d3d3d; margin: 0 0 2.5rem; max-width: 760px; }

    /* The row of cards slides right-to-left as the section scrolls past (set from TS). */
    .track { width: 100%; }
    .tiles { list-style: none; margin: 0; padding: 0 var(--section-x); display: flex; gap: 1.25rem; width: max-content; will-change: transform; }
    .tiles > li { width: clamp(300px, 30vw, 420px); flex: none; }
    .tile { width: 100%; height: 100%; text-align: left; background: #FFFFFF; border: 1px solid #E2DED1; border-radius: 16px; padding: 0; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; font: inherit; color: inherit; transition: box-shadow 0.2s ease; }
    .tile:hover, .tile:focus-visible { box-shadow: 0 14px 32px rgba(0,0,0,0.1); }
    .tile:focus-visible { outline: 2px solid var(--color-1, #E85D04); outline-offset: 2px; }
    .tile-img { display: flex; align-items: center; justify-content: center; height: 220px; padding: 1.25rem; box-sizing: border-box; }
    .tile-img img { max-width: 100%; max-height: 100%; object-fit: contain; }
    .tile-body { display: flex; flex-direction: column; gap: 0.5rem; padding: 1.25rem 1.4rem 1.5rem; flex: 1; }
    .tile-title { font-size: 1.2rem; font-weight: 700; line-height: 1.25; }
    .tile-teaser { font-size: 0.98rem; line-height: 1.55; color: #4a4a4a; flex: 1; }
    .tile-more { font-size: 0.9rem; font-weight: 600; color: var(--color-1, #E85D04); margin-top: 0.4rem; }

    /* Phones: no scroll-driven motion, just swipe. */
    @media (max-width: 700px) {
      .track { overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
      .track::-webkit-scrollbar { display: none; }
      .tiles { transform: none !important; }
      .tiles > li { width: 78vw; scroll-snap-align: start; }
      .tile-img { height: 170px; }
    }
  `],
})
export class DeeperComponent {
    label = input.required<string>();
    title = input.required<string>();
    lead = input.required<string>();
    moreLabel = input.required<string>();
    tiles = input.required<DeeperTile[]>();
    open = output<{ title: string; content: string; color: string }>();

    private track = viewChild.required<ElementRef<HTMLElement>>('track');
    private row = viewChild.required<ElementRef<HTMLElement>>('row');

    constructor() {
        const destroyRef = inject(DestroyRef);
        afterNextRender(() => {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
            const phone = window.matchMedia('(max-width: 700px)');
            let raf = 0;
            const update = () => {
                raf = 0;
                const row = this.row().nativeElement;
                if (reduce.matches || phone.matches) { row.style.transform = ''; return; }
                const wrap = this.track().nativeElement.getBoundingClientRect();
                const vh = window.innerHeight;
                // 0 when the row enters at the bottom of the screen, 1 when it leaves at the top
                const p = Math.min(1, Math.max(0, (vh - wrap.top) / (vh + wrap.height)));
                const overflow = Math.max(0, row.scrollWidth - wrap.width);
                const lead = wrap.width * 0.35; // cards start further right and travel in
                const x = lead - p * (overflow + lead * 2);
                row.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`;
            };
            const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
            window.addEventListener('scroll', onScroll, { passive: true, capture: true });
            window.addEventListener('resize', onScroll);
            update();
            destroyRef.onDestroy(() => {
                window.removeEventListener('scroll', onScroll, { capture: true });
                window.removeEventListener('resize', onScroll);
                if (raf) cancelAnimationFrame(raf);
            });
        });
    }
}
