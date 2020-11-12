import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ]
})
export class StarModule {

}