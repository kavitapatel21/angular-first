import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './user/users/users.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
//import { NumlistService } from './numlist.service';


const appRoutes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'users',component: UsersComponent},
  {path: 'user',component: UserComponent, children:[{path: ':id/:name',component: UsersComponent}]},
  {path: 'server',component: ServerComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    ServerComponent,
    UsersComponent,
    EditServerComponent,
    Comp1Component,
    Comp2Component,
    CompanyComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [/**NumlistService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
