import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { EditComponent } from './blog/edit/edit.component';
import { StartComponent } from './blog/start/start.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: BlogComponent, children: [
      { path: '', component: StartComponent },
      { path :'new', component: EditComponent},
      { path: ':id',component :DetailsComponent},
    
      { path :':id/edit', component: EditComponent}
  
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
