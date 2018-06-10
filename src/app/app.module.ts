import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatDatepicker, MatDividerModule,MatDialogModule,
  MatNativeDateModule, MatSortModule,
  MatRadioModule, MatTableModule,MatSnackBarModule,
  MatSelectModule, MatSliderModule,
  MatOptionModule, MatButtonToggleModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatGridListModule, MatAutocomplete, MatAutocompleteModule
} from '@angular/material'; import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { TableModule } from 'primeng/table';
import { AssociateComponent } from './associate/associate.component';
import { SkillComponent, SkillEditDialog } from './skill/skill.component';
import { SearchPipe } from './pipe/SearchPipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor/Interceptor';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'associate', component: AssociateComponent },
  { path: 'associate/:id', component: AssociateComponent },
  { path: 'home', component: DashBoardComponent },
  { path: 'skill', component: SkillComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    AssociateComponent,
    SkillComponent, SearchPipe,SkillEditDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, HttpClientModule,
    MatMenuModule, MatAutocompleteModule,
    MatToolbarModule, MatDividerModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, CdkTableModule, MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,MatDialogModule,
    MatRadioModule, MatSortModule,
    MatSelectModule, MatSliderModule,
    MatOptionModule, MatButtonToggleModule,MatSnackBarModule,
    MatSlideToggleModule, MatGridListModule,
    RouterModule.forRoot(appRoutes), TableModule
  ],
  entryComponents: [SkillComponent, SkillEditDialog],
  providers: [
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
    bootstrap: [AppComponent]
})

export class AppModule { }
