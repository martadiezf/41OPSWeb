import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export interface PartStwContent {
    titleHtml: string;
    lead: string;
    pipelineLabel: string;
    pipeline: Array<{ title: string; text: string }>;
    pipelineNote: string;
    intro: string;
    stepsLabel: string;
    steps: Array<{ number: string; title: string; tag: string; text: string }>;
    stepsNote: string;
    doorsLabel: string;
    doors: Array<{ title: string; text: string }>;
    modesLabel: string;
    modes: Array<{ title: string; text: string }>;
    closing: string;
}

@Component({
    selector: 'app-part-stw',
    standalone: true,
    templateUrl: './part-stw.component.html',
    styleUrl: './part-stw.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartStwComponent {
    content = input.required<PartStwContent>();
}
