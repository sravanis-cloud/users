import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const appRoutes: Routes = [
  { path: 'usersList', 
    component: UsersComponent 
  },
  {
    path: 'user/:login',
    component: UserComponent
  },
   { path: '', 
    component: UsersComponent 
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
