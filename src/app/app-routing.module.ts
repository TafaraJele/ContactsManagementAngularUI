import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contancts-management/pages/contact-details/contact-details/contact-details.component';
import { ContactEditorComponent } from './contancts-management/pages/contact-editor/contact-editor/contact-editor.component';
import { ContactListComponent } from './contancts-management/pages/contact-list/contact-list/contact-list.component';

const routes: Routes = [
  {path: '', component: ContactListComponent},
  {path:'contact-editor', component:ContactEditorComponent},
  {path:'contact-details', component:ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
