import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule, FormsModule],
  declarations: [LayoutComponent, ListComponent, AddEditComponent],
})
export class UsersModule {}
