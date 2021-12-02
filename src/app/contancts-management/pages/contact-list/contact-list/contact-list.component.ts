import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contancts-management/services/contacts.service';
import { NotificationsService } from 'src/app/contancts-management/services/notifications.service';
import { Contact } from 'src/app/models/contact.model';
import { ContactEditorComponent } from '../../contact-editor/contact-editor/contact-editor.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = []
  message: string = ""
  constructor(
    private service: ContactsService,
    private notificationService: NotificationsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.LoadContacts()
  }

  LoadContacts() {
    this.service.loadContacts().subscribe(contacts => {
      if (contacts) {
        this.contacts = contacts
      }
    })
  }
  onDelete(contact: Contact) {
    this.service.deleteContact(contact.id).subscribe(result => {
      debugger
      this.LoadContacts()
    })
    debugger
    this.LoadContacts()
  }
  viewContactDetails(contact: Contact) {
    this.service.changeMessage(contact)
    var contactDetails = new ContactEditorComponent(this.formBuilder, this.service, this.notificationService)
    contactDetails.ngOnInit()
    this.router.navigate(['/contact-details'])
  }
}
