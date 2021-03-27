import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

const components = [
  RightSidebarComponent,
  SearchBarComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class GlobalModule { }
