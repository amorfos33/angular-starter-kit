import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {BigInputComponent} from "./big-input/big-input/big-input.component";
import {BigInputActionComponent} from "./big-input/big-input-action/big-input-action.component";
import {TranslateModule} from "@ngx-translate/core";
import {RtlSupportDirective} from "./rtl-support/rtl-support.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        TranslateModule,

        MatButtonModule,
        MatSelectModule,
        MatTabsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDividerModule,
    ],
    declarations: [
        BigInputComponent,
        BigInputActionComponent,
        RtlSupportDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        TranslateModule,

        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatChipsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatCardModule,
        MatListModule,
        MatSelectModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,

        BigInputComponent,
        BigInputActionComponent,
        RtlSupportDirective
    ]
})
export class SharedModule {
    constructor() {}
}