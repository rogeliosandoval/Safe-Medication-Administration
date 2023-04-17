import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SafeDrugAdministrationComponent } from './safe-drug/safe-drug-component';
import { PrinciplesOfAdministeringDrugs } from './principles/principles.component';
import { SolvingDosageCalculationProblems } from './dosage/dosage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'safe-drug-administration', component: SafeDrugAdministrationComponent },
  { path: 'principles-of-administering-drugs', component: PrinciplesOfAdministeringDrugs },
  { path: 'solving-dosage-calculation-problems', component: SolvingDosageCalculationProblems },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafeDrugAdministrationComponent,
    PrinciplesOfAdministeringDrugs,
    SolvingDosageCalculationProblems
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
