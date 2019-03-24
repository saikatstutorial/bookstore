import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
