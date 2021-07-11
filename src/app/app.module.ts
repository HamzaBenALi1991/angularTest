import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { PublicationsComponent } from './blog/publications/publications.component';
import { PubComponent } from './blog/publications/pub/pub.component';
import { ServiceService } from './service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './blog/start/start.component';
import { EditComponent } from './blog/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    DetailsComponent,
    PublicationsComponent,
    PubComponent,
    StartComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
