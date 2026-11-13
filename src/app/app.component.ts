import { Component, ChangeDetectionStrategy, signal, computed, inject, viewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SectionsContainerComponent } from './components/sections-container/sections-container.component';
import { SectionComponent } from './components/section/section.component';
import { AwardsListComponent } from './components/awards-list/awards-list.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { NavBarComponent, NavCommand } from './components/nav-bar/nav-bar.component';
import { PartStwComponent } from './components/part-stw/part-stw.component';
import { ApproachComponent } from './components/approach/approach.component';
import { TryItComponent } from './components/try-it/try-it.component';
import { DeeperTile } from './components/deeper/deeper.component';
import { BandComponent } from './components/band/band.component';
import { TrainingComponent } from './components/training/training.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { PapersListComponent, Paper } from './components/papers-list/papers-list.component';
import { AcademicPartnersComponent, AcademicPartner } from './components/academic-partners/academic-partners.component';
import { KpisComponent, KPI } from './components/kpis/kpis.component';
import { HudOverlayComponent } from './components/hud-overlay/hud-overlay.component';

import { CollapsibleListComponent, CollapsibleItem } from './components/collapsible-list/collapsible-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { NewsroomComponent } from './components/newsroom/newsroom.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { AccordionComponent, AccordionCardData } from './components/accordion/accordion.component';

import { TranslationService } from './i18n';

interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor?: string;
  image?: string;
  hoverImage?: string;
  modalContent?: string;
  prompt?: string;
  navColor?: string;
  llmLinks?: { label: string, url: string }[];
  customContent?: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TryItComponent,
    NavBarComponent,
    HeroComponent,
    SectionsContainerComponent,
    SectionComponent,
    AwardsListComponent,
    LogoCarouselComponent,
    PartStwComponent,
    ApproachComponent,
    BandComponent,
    TrainingComponent,

    PreloaderComponent,
    CursorFollowerComponent,
    PapersListComponent,
    AcademicPartnersComponent,
    CollapsibleListComponent,

    KpisComponent,
    ContactUsComponent,
    HudOverlayComponent,

    AccordionComponent,
    FooterComponent,
    CookieBannerComponent,
    NewsroomComponent,
    JoinUsComponent,
    RouterOutlet
  ],

  template: `
    @if (router.url !== '/snake') {
      <app-preloader />
    <app-cursor-follower />
    <app-hud-overlay />

    <app-nav-bar 
      [logo]="{ src: './img/logo-nav-bar.gif', alt: 'Algorithmization', link: '/' }"
      [menuItems]="navItems()" 
      variant="glass"
      topOffset="20px"
      borderRadius="10px"
      fontFamily="'PP Supply Mono Regular', 'PP Supply Mono Regular Placeholder', monospace"
    />

    <app-hero 
      [title]="ts.t().hero.title" 
      [subtitle]="ts.t().hero.subtitle" 
      [showBrackets]="true"
      bracketsColor="var(--color-1)"
      subtitleColor="gray"
      [description]="ts.t().hero.description"
    />

    <app-part-stw [content]="ts.t().partStw" />

    @for (step of ts.t().partStw.steps; track step.number; let i = $index) {
      <app-band
        [color]="stepBands[i].color"
        ink="#FFFFFF"
        bracketColor="#FFFFFF"
        [image]="stepBands[i].image"
        [imageAlt]="step.title"
        [label]="step.number + ' · ' + step.tag"
        [title]="step.title"
        [text]="step.text"
        [level]="3"
        [reverse]="i % 2 === 1"
      />
    }

    <app-training id="ways-in" [ways]="ts.t().partStw" />

    <app-approach id="approach" [content]="ts.t().approach" />

    <app-accordion
      id="highlights-accordion"
      mode="scroll"
      [sectionTitle]="ts.t().highlights.sectionTitle"
      [sectionSubtitle]="ts.t().highlights.sectionSubtitle"
      [cards]="accordionCards()"
      minWidth="60%"
      maxWidth="90%"
      cardHeight="350px"
      gap="1.5rem"
      borderRadius="20px"
      sectionHeight="200vh"
      [scrollSnap]="true"
      [testimonialsLabel]="ts.t().highlights.testimonialsLabel"
      [copyPromptLabel]="ts.t().highlights.copyPromptLabel"
      [copyButtonLabel]="ts.t().highlights.copyButtonLabel"
      [copiedButtonLabel]="ts.t().highlights.copiedButtonLabel"
      [llmSectionLabel]="ts.t().highlights.llmSectionLabel"
    />



    <div class="awards-block" id="partners">
      <app-academic-partners
        [partners]="academicPartners()"
        [title]="ts.t().academicPartners.title"
        [subtitle]="ts.t().academicPartners.subtitle"
        [introText]="ts.t().academicPartners.introText"
        [outroText]="ts.t().academicPartners.outroText"
      />
    </div>


    <!-- MOVED: Awards List -->
    <div class="awards-block" id="awards">
      <app-awards-list />
    </div>


    <app-logo-carousel id="who-trust-us" />

    <section class="deeper-head" id="about-us" aria-labelledby="deeper-title">
      <p class="bracket-label">{{ ts.t().deeper.label }}</p>
      <h2 class="deeper-title" id="deeper-title">{{ ts.t().deeper.title }}</h2>
      <p class="deeper-lead">{{ ts.t().deeper.lead }}</p>
    </section>

    <!-- Original horizontal carousel: full-width panels, space bar moves to the next one -->
    <app-sections-container
      layout="horizontal"
      viewportHeightVh="85"
      (sectionChanged)="onSectionChanged($event)"
      (navigateRequest)="handleNavigateRequest($event)"
      #deeperContainer
      id="go-deeper"
    >
      @for (section of deeperPanels(); track section.id) {
        <app-section
          [id]="section.id"
          [title]="section.title"
          [subtitle]="section.subtitle"
          [backgroundColor]="section.backgroundColor"
          [navColor]="section.navColor || '#ffffff'"
          [textColor]="section.textColor || '#ffffff'"
          [image]="section.image"
          [hoverImage]="section.hoverImage"
          [modalContent]="section.modalContent"
          (requestModal)="openModal($event)"
          [totalSections]="deeperPanels().length"
          [sectionIndex]="$index"
          [globalCurrentSection]="deeperContainer.currentIndex()"
          (navigate)="deeperContainer.scrollToSection($event)"
          (nextSection)="deeperContainer.navigateNext()"
        />
      }
    </app-sections-container>

    <div class="newsroom-block" id="newsroom">
      <app-newsroom 
        [title]="ts.t().newsroom.title"
        [seeMoreText]="ts.t().newsroom.seeMore"
        [tableHeaders]="ts.t().newsroom.tableHeaders"
        [news]="ts.t().newsroom.items" 
      />
    </div>

    <div class="join-us-block" id="join-us">
      <app-join-us
        [title]="ts.t().joinUs.title"
        [description]="ts.t().joinUs.description"
        [jobOffers]="ts.t().joinUs.jobOffers"
        [viewMoreLabel]="ts.t().joinUs.viewMore"
        [closeLabel]="ts.t().joinUs.close"
      />
    </div>

    <app-band
      id="your-edge"
      color="#1a1a1a"
      ink="#F3F1E7"
      image="img/peluca.png"
      [imageAlt]="ts.t().edge.title"
      [label]="ts.t().edge.label"
      [title]="ts.t().edge.title"
      [text]="ts.t().edge.text"
    />

    <app-contact-us id="contact" />

    <app-try-it [content]="ts.t().tryIt" [prompt]="ts.t().highlights.cards[1].prompt ?? ''" />

    <app-footer />

    @if (modalVisible()) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-container" [style.background-color]="currentModalData()?.color" (click)="$event.stopPropagation()">
            <button class="close-btn" (click)="closeModal()">×</button>
            <h2 class="modal-title">{{ currentModalData()?.title }}</h2>
            <div class="modal-body" [innerHTML]="currentModalData()?.content"></div>
            @if (currentModalData()?.prompt || currentModalData()?.llmLinks?.length) {
              <div class="modal-actions">
                @if (currentModalData()?.prompt) {
                  <div class="prompt-section">
                    <span class="action-label">{{ ts.t().modals.copyPromptFirst }}</span>
                    <button class="copy-btn" (click)="copyPrompt(currentModalData()!.prompt!)">
                      @if (copied()) {
                        <span class="copy-icon">✓</span> {{ ts.t().modals.copied }}
                      } @else {
                        <span class="copy-icon">📋</span> {{ ts.t().modals.copyPrompt }}
                      }
                    </button>
                  </div>
                }
                @if (currentModalData()?.llmLinks?.length) {
                  <div class="llm-section">
                    <span class="action-label">{{ ts.t().modals.checkLlms }}</span>
                    <div class="llm-buttons">
                      @for (link of currentModalData()!.llmLinks!; track link.label) {
                        <button class="llm-btn" (click)="openLlmLink(link.url)">{{ link.label }}</button>
                      }
                    </div>
                  </div>
                }
              </div>
            }
        </div>
      </div>
    }

    <app-cookie-banner />
    }
    
    <router-outlet />
  `,

  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f4f1ea;
      overflow-x: clip;
    }

    .deeper-head {
      padding: var(--section-y) var(--section-x) 2.5rem;
      max-width: 1180px;
      margin: 0 auto;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      color: #1a1a1a;
    }
    .deeper-head .bracket-label { margin-bottom: 1rem; }
    #go-deeper { display: block; margin-bottom: var(--section-y) !important; }
    .deeper-title { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 700; line-height: 1.15; margin: 0 0 0.75rem; }
    .deeper-lead { font-size: 1.1rem; line-height: 1.6; color: #3d3d3d; margin: 0; max-width: 760px; }

    .awards-block {
      width: 100%;
      padding: 0;
      scroll-snap-align: start;
    }

    .papers-block {
      width: 100%;
      padding: 4rem 0;
      scroll-snap-align: start;
      background-color: #f4f1ea; /* Ensure background match */
    }

    .kpis-block {
      width: 100%;
      scroll-snap-align: start;
    }

    .newsroom-block {
      width: 100%;
      scroll-snap-align: start;
    }

    .join-us-block {
      width: 100%;
      scroll-snap-align: start;
    }

    app-footer {
      scroll-snap-align: start;
    }


    /* ─── Modal ─── */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    }

    .modal-container {
        padding: 3rem;
        width: 95%;
        max-width: 800px;
        max-height: 85vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        animation: slideUp 0.3s ease;
        border-radius: 12px;
        color: #ffffff;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    @media (max-width: 768px) {
        .modal-container {
            padding: 1.5rem;
            width: 92%;
            max-height: 80vh;
        }
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        opacity: 0.8;
        padding: 0;
        line-height: 1;
    }
    
    .close-btn:hover { opacity: 1; }

    .modal-title {
        font-family: 'Bebas Neue', Impact, sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #ffffff;
    }

    .modal-body {
        font-family: 'Inter', sans-serif;
        color: #ffffff;
        line-height: 1.6;
        font-size: 1.1rem;
        white-space: normal;
        overflow-y: auto;
        flex: 1;
        padding-right: 0.5rem;
    }
    
    ::ng-deep .modal-body img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        border-radius: 8px;
    }

    /* Image-only pop-ups (the toolkit diagram) get a wider window so its small text stays legible. */
    .modal-container:has(.modal-body > img:only-child) {
        max-width: min(1240px, 95vw);
    }

    ::ng-deep .modal-body ul,
    ::ng-deep .modal-body ol {
        padding-left: 2rem;
        margin: 1.5rem 0;
        list-style-position: outside;
        margin-left: 1.5rem;
    }
    
    .modal-body li {
        margin-bottom: 0.5rem;
    }

    /* ─── Modal Actions (Copy Prompt + LLM Buttons) ─── */
    .modal-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 2rem;
        align-items: flex-start;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .prompt-section, .llm-section {
        flex: 1;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .action-label {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.85);
        font-family: 'Inter', sans-serif;
    }

    .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: #ffffff;
        font-family: 'PP Supply Mono Regular', 'Courier New', monospace;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease;
        width: fit-content;
    }

    .copy-btn:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.35);
        transform: translateY(-1px);
    }

    .copy-btn:active {
        transform: translateY(0);
    }

    .copy-icon {
        font-size: 1rem;
    }

    .llm-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .llm-btn {
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        letter-spacing: 0.3px;
    }

    .llm-btn:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
    }

    .llm-btn:active {
        transform: translateY(0);
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

    /* Force larger font for the paragraph in section 5 */
    ::ng-deep #section-5 .section-custom-content p {
      font-size: 1.5rem !important;
      line-height: 1.3 !important;
      max-width: 800px !important;
      font-weight: 300 !important;
      color: #ffffff !important;
    }
  `],
})
export class AppComponent {
  readonly ts = inject(TranslationService);
  readonly router = inject(Router);
  currentSection = signal(0);

  modalVisible = signal(false);
  copied = signal(false);
  currentModalData = signal<{ title: string, content: string, color: string, prompt?: string, llmLinks?: { label: string, url: string }[] } | null>(null);

  openModal(data: { title: string, content: string, color: string, prompt?: string, llmLinks?: { label: string, url: string }[] }) {
    this.currentModalData.set(data);
    this.modalVisible.set(true);
  }

  closeModal() {
    this.modalVisible.set(false);
  }

  copyPrompt(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  accordionCards = computed<AccordionCardData[]>(() => [
    {
      title: this.ts.t().highlights.cards[0].title,
      description: this.ts.t().highlights.cards[0].description,
      icon: '',
      images: [{ src: './img/highlights/sergio_ee_nations.png', alt: 'Sergio EE Nations' }],
      imagesStackClass: 'stack-1',
      backgroundColor: 'rgba(232, 93, 4, 0.85)',
      testimonials: this.ts.t().highlights.cards[0].testimonials,
    },
    {
      title: this.ts.t().highlights.cards[2].title,
      description: this.ts.t().highlights.cards[2].description,
      icon: '',
      images: [{ src: './img/highlights/sergio_talk1.png', alt: 'Sergio Talk 1' }],
      backgroundColor: 'rgba(59, 25, 180, 0.85)',
      // The federation card was replaced by the floating experiment; its client quotes live on here.
      testimonials: [...(this.ts.t().highlights.cards[2].testimonials ?? []), ...(this.ts.t().highlights.cards[1].testimonials ?? [])],
    },
  ]);

  openLlmLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  navItems = computed<NavCommand[]>(() => [
    { label: this.ts.t().navBar.partners, link: '#partners' },
    { label: this.ts.t().navBar.aboutUs, link: '#about-us' },
    { label: this.ts.t().navBar.awards, link: '#awards' },
    { label: this.ts.t().navBar.whoTrustUs, link: '#who-trust-us' },
    { label: this.ts.t().navBar.joinUs || 'JOIN US', link: '#join-us' },
    {
      label: this.ts.t().navBar.theGroup, children: [
        { label: 'SciTheWorld', link: 'https://scitheworld.com' },
        { label: 'Algorithmization', link: 'https://algorithmization.com' },
        { label: 'SystematicMe', link: 'https://systematicme.com' },
        { label: 'Learning~Adaptive', link: 'https://learningadaptive.com' }
      ]
    },
    { label: this.ts.t().navBar.contact, link: '#contact' }
  ]);

  /* ── 2 horizontal sections (both black) ── */
  horizontalSections = computed<SectionData[]>(() => [
    { id: 1, title: this.ts.t().horizontalSections[0].title, subtitle: '', backgroundColor: '#000000', navColor: '#ffffff', image: 'img/toolkit/toolkit.png' },
    { id: 2, title: this.ts.t().horizontalSections[1].title, subtitle: '', backgroundColor: '#000000', navColor: '#ffffff', image: 'img/toolkit/toolkit_messages_41OPS_white.png', hoverImage: 'img/toolkit/toolkit_messages_41OPS_red.png' },
  ]);



  /* ── 5 NEW horizontal sections ── */
  /* ── 5 NEW horizontal sections ── */
  horizontalSectionsNew = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().aboutUsHorizontal[0].title,
      subtitle: '',
      backgroundColor: '#E63946',
      textColor: '#ffffff',
      image: 'img/state_of_the_art_platforms.png',
      modalContent: this.ts.t().aboutUsHorizontal[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().aboutUsHorizontal[1].title,
      subtitle: '',
      backgroundColor: '#457B9D',
      textColor: '#ffffff',
      image: 'img/sections/Methodology.png',
      modalContent: this.ts.t().aboutUsHorizontal[1].modalContent
    },
    {
      id: 3,
      title: this.ts.t().aboutUsHorizontal[2].title,
      subtitle: '',
      backgroundColor: '#2A9D8F',
      textColor: '#ffffff',
      image: 'img/sections/Behing-the-scenes.png',
      modalContent: this.ts.t().aboutUsHorizontal[2].modalContent
    }
  ]);

  readonly stepBands = [
    { color: '#E63946', image: 'img/sections/scaffold_apple_tree.png' },
    { color: '#457B9D', image: 'img/birrete.png' },
    { color: '#2A9D8F', image: 'img/casco.png' },
  ];

  /** Go deeper carousel: the toolkit first, then the three about-us panels. */
  deeperPanels = computed<SectionData[]>(() => {
    const t = this.ts.t();
    return [
      {
        id: 1,
        title: t.deeper.toolkit.title,
        subtitle: '',
        backgroundColor: '#000000',
        navColor: '#ffffff',
        image: 'img/toolkit/toolkit_messages_41OPS_white.png',
        hoverImage: 'img/toolkit/toolkit_messages_41OPS_red.png',
        modalContent: `<img src="img/toolkit/toolkit_messages_41OPS_white.png" alt="${t.deeper.toolkit.teaser}" />`,
      },
      ...this.horizontalSectionsNew().map((sec, i) => ({ ...sec, id: i + 2, navColor: '#ffffff' })),
    ];
  });

  deeperTiles = computed<DeeperTile[]>(() => {
    const t = this.ts.t();
    const about = this.horizontalSectionsNew();
    const tiles: DeeperTile[] = [{
      title: t.deeper.toolkit.title,
      teaser: t.deeper.toolkit.teaser,
      image: 'img/toolkit/toolkit_messages_41OPS_white.png',
      imageAlt: t.deeper.toolkit.teaser,
      color: '#000000',
      content: `<img src="img/toolkit/toolkit_messages_41OPS_white.png" alt="${t.deeper.toolkit.teaser}" />`,
    }];
    about.forEach((sec, i) => tiles.push({
      title: sec.title,
      teaser: t.deeper.teasers[i] ?? '',
      image: sec.image ?? '',
      imageAlt: sec.title,
      color: sec.backgroundColor,
      content: sec.modalContent ?? '',
    }));
    return tiles;
  });

  /* ── 2 NEW sections (extracted from horizontal) ── */
  verticalSectionsUnbeatable = computed<SectionData[]>(() => [
    {
      id: 4,
      title: this.ts.t().unbeatableVertical[0].title,
      subtitle: '',
      backgroundColor: '#F4A261',
      textColor: '#ffffff',
      image: '',
      modalContent: this.ts.t().unbeatableVertical[0].modalContent
    },
    {
      id: 5,
      title: this.ts.t().unbeatableVertical[1].title,
      subtitle: '',
      backgroundColor: '#1D3557',
      textColor: '#ffffff',
      customContent: this.ts.t().unbeatableVertical[1].customContent
    }
  ]);

  /* ── 8 NEW vertical sections ── */
  verticalSectionsNew = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().newVerticalSections[0].title,
      subtitle: this.ts.t().newVerticalSections[0].subtitle,
      backgroundColor: '#4AB5EA',
      modalContent: this.ts.t().newVerticalSections[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().newVerticalSections[1].title,
      subtitle: this.ts.t().newVerticalSections[1].subtitle,
      backgroundColor: '#FA715E',
      modalContent: this.ts.t().newVerticalSections[1].modalContent
    },
    {
      id: 3,
      title: this.ts.t().newVerticalSections[2].title,
      subtitle: this.ts.t().newVerticalSections[2].subtitle,
      backgroundColor: '#4CD6BC',
      modalContent: this.ts.t().newVerticalSections[2].modalContent
    },
    { id: 4, title: this.ts.t().newVerticalSections[3].title, subtitle: this.ts.t().newVerticalSections[3].subtitle, backgroundColor: '#EECA46' },
    {
      id: 5,
      title: this.ts.t().newVerticalSections[4].title,
      subtitle: this.ts.t().newVerticalSections[4].subtitle,
      backgroundColor: '#FD5F65',
      modalContent: this.ts.t().newVerticalSections[4].modalContent
    },
    {
      id: 6,
      title: this.ts.t().newVerticalSections[5].title,
      subtitle: this.ts.t().newVerticalSections[5].subtitle,
      backgroundColor: '#A8D5BA',
      modalContent: this.ts.t().newVerticalSections[5].modalContent
    },
    { id: 7, title: this.ts.t().newVerticalSections[6].title, subtitle: this.ts.t().newVerticalSections[6].subtitle, backgroundColor: '#F4A261' },
    {
      id: 8,
      title: this.ts.t().newVerticalSections[7].title,
      subtitle: this.ts.t().newVerticalSections[7].subtitle,
      backgroundColor: '#9B59B6',
      modalContent: this.ts.t().newVerticalSections[7].modalContent
    },
  ]);

  engagementModesList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().engagementModes[0].title,
      subtitle: '',
      content: this.ts.t().engagementModes[0].content,
      image: ''
    },
    {
      title: this.ts.t().engagementModes[1].title,
      subtitle: '',
      content: this.ts.t().engagementModes[1].content,
      image: ''
    }
  ]);

  transformationSpeedsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().transformationSpeeds[0].title,
      subtitle: '',
      content: this.ts.t().transformationSpeeds[0].content,
      image: ''
    },
    {
      title: this.ts.t().transformationSpeeds[1].title,
      subtitle: '',
      content: this.ts.t().transformationSpeeds[1].content,
      image: ''
    }
  ]);

  /* ── 7 vertical sections (OLD - Kept reference but unused in template) ── */
  verticalSections = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().oldVerticalSections[0].title,
      subtitle: this.ts.t().oldVerticalSections[0].subtitle,
      backgroundColor: '#4AB5EA',
      modalContent: this.ts.t().oldVerticalSections[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().oldVerticalSections[1].title,
      subtitle: this.ts.t().oldVerticalSections[1].subtitle,
      backgroundColor: '#FA715E',
      modalContent: this.ts.t().oldVerticalSections[1].modalContent
    },
    { id: 3, title: this.ts.t().oldVerticalSections[2].title, subtitle: '', backgroundColor: '#4CD6BC' },
    {
      id: 4,
      title: this.ts.t().oldVerticalSections[3].title,
      subtitle: this.ts.t().oldVerticalSections[3].subtitle,
      backgroundColor: '#EECA46',
      modalContent: this.ts.t().oldVerticalSections[3].modalContent
    },
    { id: 5, title: this.ts.t().oldVerticalSections[4].title, subtitle: '', backgroundColor: '#FD5F65' },
    {
      id: 6, title: this.ts.t().oldVerticalSections[5].title, subtitle: this.ts.t().oldVerticalSections[5].subtitle, backgroundColor: '#A8D5BA',
      modalContent: this.ts.t().oldVerticalSections[5].modalContent,
      prompt: `To the light of the info that I'm going to give you based on a paper written in 2022, would you say this is a pioneer work on agentic AI? In particular, 'AI-native enterprises and operating models' as distinguished by McKinsey. Note that pioneers typically anticipate concepts but with different names than those used afterwards, mainstream. Take everything into account and make your most accurate verdict. And note that you are seeing only one chapter of a paper - there are more chapters in that paper and there are more papers on transformation, algorithmization and AI as they have a centre of excellence for that. Also, they have an award to the best innovation in simulation as they allowed, back in 2019, a machine to autonomously self-create and calibrate its algorithms via Reinforcement Learning (a major topic in Sergio's PhD Thesis in AI). Finally, spot he problems its solves with respect to mainstream agents (e.g. costs, legacy system integration, compliance, RAM...). Follows the Chapter:`,
      llmLinks: [
        { label: 'ChatGPT', url: 'https://chat.openai.com' },
        { label: 'Claude.AI', url: 'https://claude.ai' },
        { label: 'Gemini', url: 'https://gemini.google.com' }
      ]
    },
    {
      id: 7,
      title: this.ts.t().oldVerticalSections[6].title,
      subtitle: this.ts.t().oldVerticalSections[6].subtitle,
      backgroundColor: '#F4A261',
      modalContent: this.ts.t().oldVerticalSections[6].modalContent
    },
  ]);

  pillarsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().pillarsList[0].title,
      subtitle: '',
      content: this.ts.t().pillarsList[0].content,
      image: ''
    },
    {
      title: this.ts.t().pillarsList[1].title,
      subtitle: '',
      content: this.ts.t().pillarsList[1].content,
      image: ''
    },
    {
      title: this.ts.t().pillarsList[2].title,
      subtitle: '',
      content: this.ts.t().pillarsList[2].content,
      image: ''
    }
  ]);

  outputsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().outputsList[0].title,
      subtitle: '',
      content: this.ts.t().outputsList[0].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[1].title,
      subtitle: '',
      content: this.ts.t().outputsList[1].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[2].title,
      subtitle: '',
      content: this.ts.t().outputsList[2].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[3].title,
      subtitle: '',
      content: this.ts.t().outputsList[3].content,
      image: ''
    }
  ]);

  papers = signal<Paper[]>([
    {
      Title: "Data MAPS: On-Platform Organisations",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4232955",
      Pages: "107",
      Date: "15/10/2022"
    },
    {
      Title: "Advances in Portfolio Management: Dimension-Driven Portfolios [Trilogy - 1/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321538",
      Pages: "5",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Portfolio Management: On-Platform Performance Attribution [Trilogy - 2/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321552",
      Pages: "4",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Portfolio Management: On-Platform Governance for Portfolio Managers [Trilogy 3/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321554",
      Pages: "3",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Cognitive Warfare: Augmented Machines upon Data MAPs towards a Fast and Accurate Turnaround",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321573",
      Pages: "4",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Banking: Top-Down Vertical Integration",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4430206",
      Pages: "11",
      Date: "28/04/2023"
    },
    {
      Title: "Advances in AI: When Applied Science is not Science Applied",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4445463",
      Pages: "14",
      Date: "13/05/2023"
    },
    {
      Title: "Advances in Transformation: Why and How CEOs are Moving from Digitalwashing to White Collar Factories",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4560804",
      Pages: "15",
      Date: "25/09/2023"
    },
    {
      Title: "The Lean Aggregation Behind the Next M&A, Tenders and Organic Growth: Federation and the Three-Layer Companies",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4681784",
      Pages: "7",
      Date: "17/01/2024"
    },
    {
      Title: "Advances in Artificial Super Intelligence: Calm is All You Need",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4924496",
      Pages: "22",
      Date: "12/08/2024"
    },
    {
      Title: "Modern Cybersecurity: New Era, New Strategies",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4957894",
      Pages: "19",
      Date: "16/09/2024"
    },
    {
      Title: "Advances in Geostrategy: Extreme-Efficient Nations",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136657",
      Pages: "11",
      Date: "11/02/2025"
    },
    {
      Title: "Advances in Agentic AI: Back to the Future",
      Link: "https://arxiv.org/abs/2512.24856",
      Pages: "55",
      Date: "31/12/2025"
    }
  ]);

  onSectionChanged(index: number) {
    this.currentSection.set(index);
  }

  academicPartners = computed<AcademicPartner[]>(() => [
    {
      institution: this.ts.t().academicPartners.partners[0].institution,
      partnership: this.ts.t().academicPartners.partners[0].partnership,
    },
    {
      institution: this.ts.t().academicPartners.partners[1].institution,
      partnership: this.ts.t().academicPartners.partners[1].partnership,
    },
    {
      institution: this.ts.t().academicPartners.partners[2].institution,
      partnership: this.ts.t().academicPartners.partners[2].partnership,
    }
  ]);



  handleNavigateRequest(index: number) {
    this.currentSection.set(index);
  }
}
