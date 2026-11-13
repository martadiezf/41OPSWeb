import { Component, ChangeDetectionStrategy, input, signal, afterNextRender, DestroyRef, inject } from '@angular/core';

export interface TryItContent {
    label: string;
    title: string;
    text: string;
    copy: string;
    copied: string;
    openIn: string;
    reopen: string;
    close: string;
}

const CLOSED_KEY = '41ops-try-it-closed';

/**
 * Floating "ask your own AI" experiment. Slides in once the visitor scrolls past the
 * opening screen, stays with them while they scroll, and goes away for good when closed.
 */
@Component({
    selector: 'app-try-it',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    @if (shown() && !closed()) {
      <aside class="try" [class.mini]="mini()" role="complementary" [attr.aria-label]="c().title">
        @if (mini()) {
          <button type="button" class="pill" (click)="mini.set(false)">
            <span class="dot" aria-hidden="true"></span>{{ copiedOnce() ? c().copied : c().reopen }}
          </button>
        } @else {
          <img class="photo" src="img/highlights/sergio_talk_2.png" alt="" />
          <p class="bracket-label">{{ c().label }}</p>
          <h2 class="title">{{ c().title }}</h2>
          <p class="text">{{ c().text }}</p>
          <button type="button" class="copy" (click)="copy()">
            {{ justCopied() ? '✓ ' + c().copied : c().copy }}
          </button>
          <p class="links">
            <span>{{ c().openIn }}</span>
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a>
            <a href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">Claude</a>
            <a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">Gemini</a>
          </p>
        }
        <button type="button" class="x" (click)="close()" [attr.aria-label]="c().close">×</button>
      </aside>
    }
  `,
    styles: [`
    :host { position: fixed; left: 24px; bottom: 24px; z-index: 900; font-family: 'Inter', sans-serif; }
    .try {
      position: relative; width: 340px; box-sizing: border-box;
      background: #1a1a1a; color: #F3F1E7; border-radius: 18px;
      padding: 1.4rem 1.4rem 1.2rem; box-shadow: 0 18px 40px rgba(0,0,0,0.28); overflow: hidden;
      animation: in 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
    .photo { display: block; width: calc(100% + 2.8rem); height: 130px; object-fit: cover; object-position: center 30%; margin: -1.4rem -1.4rem 1rem; }
    .try:not(.mini) .x { background: rgba(0,0,0,0.45); color: #fff; }
    .bracket-label { --bracket-text: rgba(243,241,231,0.75); margin: 0 0 0.6rem; font-size: 0.75rem; }
    .title { font-size: 1.15rem; font-weight: 700; line-height: 1.25; margin: 0 1.2rem 0.5rem 0; }
    .text { font-size: 0.9rem; line-height: 1.5; color: #cfcbbf; margin: 0 0 1rem; }
    .copy {
      width: 100%; border: 0; border-radius: 999px; padding: 0.75rem 1rem; cursor: pointer;
      background: var(--color-1, #E85D04); color: #fff; font: 600 0.95rem 'Inter', sans-serif;
      transition: filter 0.2s ease;
    }
    .copy:hover, .copy:focus-visible { filter: brightness(1.08); }
    .links { display: flex; flex-wrap: wrap; gap: 0.35rem 0.8rem; align-items: baseline; margin: 0.85rem 0 0; font-size: 0.82rem; color: #a9a597; }
    .links a { color: #F3F1E7; text-decoration: underline; text-underline-offset: 3px; }
    .links a:hover { color: var(--color-1, #E85D04); }
    .x {
      position: absolute; top: 0.6rem; right: 0.7rem; width: 28px; height: 28px; border: 0; border-radius: 50%;
      background: transparent; color: #cfcbbf; font-size: 1.3rem; line-height: 1; cursor: pointer;
    }
    .x:hover, .x:focus-visible { background: rgba(255,255,255,0.1); color: #fff; }

    .try.mini { width: auto; padding: 0.35rem 2.6rem 0.35rem 0.35rem; border-radius: 999px; }
    .try.mini .x { top: 50%; transform: translateY(-50%); right: 0.4rem; }
    .pill {
      display: flex; align-items: center; gap: 0.55rem; border: 0; background: transparent; color: #F3F1E7;
      font: 600 0.88rem 'Inter', sans-serif; padding: 0.55rem 0.8rem; cursor: pointer; white-space: nowrap;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-1, #E85D04); }

    @media (max-width: 700px) {
      :host { left: 12px; right: 12px; bottom: 12px; }
      .try { width: 100%; }
      .try.mini { width: auto; display: inline-block; }
    }
  `],
})
export class TryItComponent {
    c = input.required<TryItContent>({ alias: 'content' });
    prompt = input.required<string>();

    shown = signal(false);
    closed = signal(false);
    mini = signal(false);
    justCopied = signal(false);
    copiedOnce = signal(false);

    constructor() {
        const destroyRef = inject(DestroyRef);
        afterNextRender(() => {
            try { if (localStorage.getItem(CLOSED_KEY) === '1') { this.closed.set(true); return; } } catch { /* storage blocked */ }
            // Phones start as the slim bar; it opens on tap.
            if (window.matchMedia('(max-width: 700px)').matches) this.mini.set(true);
            const phone = window.matchMedia('(max-width: 700px)');
            // On phones the cookie banner covers the bottom of the screen: wait until it is answered.
            const cookieOpen = () => {
                const el = document.querySelector('app-cookie-banner .cookie-banner') as HTMLElement | null;
                return !!el && el.offsetParent !== null && el.getBoundingClientRect().height > 0;
            };
            const onScroll = () => {
                if (window.scrollY > window.innerHeight * 2 && !(phone.matches && cookieOpen())) {
                    this.shown.set(true);
                    window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true, capture: true });
            onScroll();
            destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions));
        });
    }

    async copy() {
        const text = this.prompt();
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            // Fallback for browsers or frames that block the clipboard API
            const ta = document.createElement('textarea');
            ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); } catch { /* nothing else to try */ }
            ta.remove();
        }
        this.justCopied.set(true);
        this.copiedOnce.set(true);
        setTimeout(() => { this.justCopied.set(false); this.mini.set(true); }, 1600);
    }

    close() {
        this.closed.set(true);
        try { localStorage.setItem(CLOSED_KEY, '1'); } catch { /* storage blocked: closes for this visit only */ }
    }
}
