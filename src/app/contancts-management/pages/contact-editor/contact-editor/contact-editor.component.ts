import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from 'src/app/contancts-management/services/contacts.service';
import { NotificationsService } from 'src/app/contancts-management/services/notifications.service';
import { Contact } from 'src/app/models/contact.model';
import { UploadErrorResponse } from 'src/app/models/upload-error-model';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    notes: new FormControl('')
  })
  contact: Contact
  uploadErrorResponse: UploadErrorResponse[] = []
  showSaveButton: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private service: ContactsService,
    private notificationService: NotificationsService
  ) {
    this.contact = new Contact()
  }

  ngOnInit(): void {

  }

  onSave(): any {

    this.contact.company = this.contactForm.value['company']
    this.contact.email = this.contactForm.value['email']
    this.contact.name = this.contactForm.value['name']
    this.contact.notes = this.contactForm.value['notes']
    this.contact.phone = this.contactForm.value['phone']

    this.service.addContact(this.contact).subscribe(result => {
      debugger
      if (result.accepted) {
        this.notificationService.showNotification('success', 'Contact successfully added', 'OK')
      }
      else {
        this.notificationService.showNotification('error', 'Adding contact failed', 'OK')

      }
    },

      httpErrorResponse => {

        var message = ""
        if (httpErrorResponse.status == 500) {
          message = httpErrorResponse.error
        }
        else if (httpErrorResponse.status == 0) {
          message = httpErrorResponse.message
        }
        else {
          debugger
          this.uploadErrorResponse = httpErrorResponse.error
          message = this.uploadErrorResponse[0].message
        }

        this.notificationService.showNotification('error', message, 'OK')
      }

    )
  }


}
