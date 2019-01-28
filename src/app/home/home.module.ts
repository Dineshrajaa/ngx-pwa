import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserListComponent } from '../user-list/user-list.component';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HomeComponent,
    UserListComponent]
})
export class HomeModule { }
