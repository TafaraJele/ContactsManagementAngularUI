import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from './contancts-management/pages/contact-list/contact-list/contact-list.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material/angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactEditorComponent } from './contancts-management/pages/contact-editor/contact-editor/contact-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './shared/angular-material/angular-material/notifications/notification-component/notifications/notifications.component';
import { ContactDetailsComponent } from './contancts-management/pages/contact-details/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactEditorComponent,
    NotificationsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    CommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
