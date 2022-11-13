import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { DetailsComponent } from './details/details.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    DetailsComponent,
    AjoutComponent,
    AccountComponent,
    AccountListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
