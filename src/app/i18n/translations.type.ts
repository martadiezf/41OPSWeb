export interface Translations {
    navBar: {
        partners: string;
        aboutUs: string;
        awards: string;
        whoTrustUs: string;
        theGroup: string;
        joinUs?: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        description: string;
    };
    partStw: {
        titleHtml: string;
        lead: string;
        intro: string;
        stepsLabel: string;
        steps: Array<{ number: string; title: string; tag: string; text: string }>;
        stepsNote: string;
        doorsLabel: string;
        doors: Array<{ title: string; text: string }>;
        modesLabel: string;
        modes: Array<{ title: string; text: string }>;
        closing: string;
    };
    approach: {
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
    };
    highlights: {
        sectionTitle: string;
        sectionSubtitle: string;
        testimonialsLabel: string;
        copyPromptLabel: string;
        copyButtonLabel: string;
        copiedButtonLabel: string;
        llmSectionLabel: string;
        cards: Array<{
            title: string;
            description: string;
            prompt?: string;
            testimonials: Array<{
                name: string;
                role: string;
                quote: string;
            }>;
            markers?: Array<{
                city: string;
                country: string;
                description: string;
            }>;
        }>;
    };
    horizontalSections: Array<{
        title: string;
    }>;
    aboutUsHorizontal: Array<{
        title: string;
        modalContent: string;
    }>;
    unbeatableVertical: Array<{
        title: string;
        modalContent?: string;
        customContent?: string;
    }>;
    newVerticalSections: Array<{
        title: string;
        subtitle: string;
        modalContent?: string;
    }>;
    engagementModes: Array<{
        title: string;
        content: string;
    }>;
    transformationSpeeds: Array<{
        title: string;
        content: string;
    }>;
    oldVerticalSections: Array<{
        title: string;
        subtitle: string;
        modalContent?: string;
    }>;
    pillarsList: Array<{
        title: string;
        content: string;
    }>;
    outputsList: Array<{
        title: string;
        content: string;
    }>;
    academicPartners: {
        title: string;
        subtitle: string;
        introText: string;
        outroText: string;
        partners: Array<{
            institution: string;
            partnership: string;
        }>;
    };
    awards: {
        title: string;
        subtitle: string;
        items: Array<{
            name: string;
            category: string;
            project: string;
            year?: string;
        }>;
    };
    newsroom: {
        title: string;
        seeMore: string;
        tableHeaders: {
            date: string;
            company: string;
            title: string;
            summary: string;
            howAiSeesUs: string;
        };
        items: {
            date: string;
            company: string;
            title: string;
            summary: string;
            howAiSeesUs?: string;
            isMain?: boolean;
            isFeatured?: boolean;
        }[];
    };
    contactUs: {
        title: string;
        addressLines: string[];
    };
    footer: {
        isoText: string;
    };
    cookieBanner: {
        title: string;
        text: string;
        customizeBtn: string;
        rejectBtn: string;
        acceptBtn: string;
        saveBtn: string;
        categories: {
            necessary: { name: string; description: string; label: string };
            analytics: { name: string; description: string };
            marketing: { name: string; description: string };
        };
        on: string;
        off: string;
    };
    preloader: {
        textLeft: string;
        textRight: string;
    };
    modals: {
        copyPromptFirst: string;
        copied: string;
        copyPrompt: string;
        checkLlms: string;
    };
    brands: {
        title: string;
    };
    common: {
        seeMore: string;
    };
    joinUs: {
        title: string;
        subtitle: string;
        description: string;
        viewMore: string;
        close: string;
        jobOffers: Array<{
            position: string;
            location: string;
            requiredSkills: string[];
            extraSkills: string[];
            description: string;
        }>;
    };
}
