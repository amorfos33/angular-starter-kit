import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';


@Component({
    selector: 'app-big-input-action',
    templateUrl: './big-input-action.component.html',
    styleUrls: ['./big-input-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputActionComponent {
    @Input()
    disabled = false;
    @Input()
    fontSet = '';
    @Input()
    fontIcon = '';
    @Input()
    label = '';
    @Input()
    color = '';

    @Output()
    action = new EventEmitter<void>();

    hasFocus = false;

    onClick() {
        this.action.emit();
    }
}
