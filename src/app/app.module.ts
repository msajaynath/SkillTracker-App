import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { CdkTableModule } from '@angular/cdk/table';

import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatDatepicker,  
  MatNativeDateModule,  MatSortModule,
  MatRadioModule,MatTableModule,
  MatSelectModule,  MatSliderModule,
  MatOptionModule, MatButtonToggleModule, 
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher,MatGridListModule
} from '@angular/material'; import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {TableModule} from 'primeng/table';
import { AssociateComponent } from './associate/associate.component';
import { SkillComponent } from './skill/skill.component';

const appRoutes: Routes = [
  { path: '*', component: AssociateComponent },
  { path: 'home', component: DashBoardComponent },
  { path: 'skill', component: SkillComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    AssociateComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,CdkTableModule,MatTableModule,
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  MatSortModule,
    MatSelectModule,  MatSliderModule,
    MatOptionModule,  MatButtonToggleModule,
    MatSlideToggleModule  ,MatGridListModule,
    RouterModule.forRoot(appRoutes),TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
