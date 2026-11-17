import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../../i18n';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    readonly ts = inject(TranslationService);
    private readonly router = inject(Router);
    linkedinUrl = input<string>('https://es.linkedin.com/company/scitheworld');
    /** Opens the office in Google Maps in a new tab (no embedded map, so no third-party cookies). */
    mapsLink = input<string>('https://www.google.com/maps/search/?api=1&query=C.+de+Pradillo+68,+28002+Madrid');

    // Theme customization if needed
    backgroundColor = input<string>('#0d0d0d');
    textColor = input<string>('#ffffff');



    openLinkedin() {
        window.open(this.linkedinUrl(), '_blank', 'noopener,noreferrer');
    }

    navigateToSnake() {
        this.router.navigate(['/snake']);
    }
}
