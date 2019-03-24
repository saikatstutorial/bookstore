import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFieldComponent } from './components/required-field/required-field.component';

@NgModule({
  declarations: [RequiredFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [RequiredFieldComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
 }
