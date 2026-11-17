import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Translations } from './translations.type';
import { EN } from './en';
import { ES } from './es';

const DICTIONARIES = {
    en: EN,
    es: ES,
};

type Lang = 'en' | 'es';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    readonly currentLang = signal<Lang>('en');

    readonly t = computed<Translations>(() => DICTIONARIES[this.currentLang()]);

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(DOCUMENT) private document: Document,
        private title: Title,
        private meta: Meta,
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const savedLang = localStorage.getItem('la-lang') as Lang;
            if (savedLang === 'en' || savedLang === 'es') {
                this.currentLang.set(savedLang);
            }
        }
        this.applySeo();
    }

    setLanguage(lang: Lang) {
        this.currentLang.set(lang);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('la-lang', lang);
        }
        this.applySeo();
    }

    /** Keeps the page language, title and description in sync with the chosen language. */
    private applySeo() {
        const seo = DICTIONARIES[this.currentLang()].seo;
        this.document.documentElement.lang = this.currentLang();
        this.title.setTitle(seo.title);
        this.meta.updateTag({ name: 'description', content: seo.description });
    }

    toggleLanguage() {
        this.setLanguage(this.currentLang() === 'en' ? 'es' : 'en');
    }
}
