import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ContactsService } from 'src/app/contancts-management/services/contacts.service';
import { NotificationsService } from 'src/app/contancts-management/services/notifications.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    notes: new FormControl(''),
  })
  contact: Contact
  showSaveButton: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private service: ContactsService,
    private notificationService: NotificationsService
  ) {
    this.contact = new Contact()
  }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(contact => this.contact = contact)
    if (this.contact != null) {
      this.polulateFormFields()
    }
  }

  onUpdate(): any {

    this.contact.company = this.contactForm.value['company']
    this.contact.email = this.contactForm.value['email']
    this.contact.name = this.contactForm.value['name']
    this.contact.notes = this.contactForm.value['notes']
    this.contact.phone = this.contactForm.value['phone']

    this.service.updateContact(this.contact).subscribe(result => {
      debugger
      if (result.accepted) {
        this.notificationService.showNotification('success', 'Contact successfully updated', 'OK')
      }
      else {
        this.notificationService.showNotification('error', 'Updating contact failed', 'OK')

      }
    })
  }

  polulateFormFields() {
    this.contactForm = this.formBuilder.group({
      'company': [this.contact.company],
      'email': [this.contact.email],
      'name': [this.contact.name],
      'notes': [this.contact.notes],
      'phone': [this.contact.phone]
    })
  }

}
