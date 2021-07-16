import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SelectWithSearchComponent } from './components/select-with-search/select-with-search.component';
import { ConfirmationPopoverComponent } from './components/confirmation-popover/confirmation-popover.component';


@NgModule({
    declarations: [
        SelectWithSearchComponent,
        ConfirmationPopoverComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        RouterModule,
        SelectWithSearchComponent,
        ConfirmationPopoverComponent

    ],
    entryComponents: [],
})
export class SharedModule {
}
