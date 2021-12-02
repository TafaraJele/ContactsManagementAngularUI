import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.contactsManagementUrl

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _httpClient: HttpClient) { }
  loadContacts(): Observable<any>{
    return this._httpClient.get(baseUrl + '/api/Contacts/api/contacts')
  }
  addContact(contact: Partial<Contact>): Observable<any>{
    return this._httpClient.post(baseUrl + '/api/Contacts/api/contacts', contact, httpOptions)
  }
  updateContact(contact: Partial<Contact>): Observable<any>{
    return this._httpClient.put(baseUrl + '/api/Contacts/api/contacts', contact, httpOptions)
  }
  deleteContact(contactId: string): Observable<any>{
    return this._httpClient.delete(baseUrl + '/api/contacts/' + contactId, httpOptions)
  }

contact: Contact = new Contact()
private messageSource = new BehaviorSubject<Contact>(new Contact)
    private userApplications = new BehaviorSubject<any>(this.contact)
    currentMessage = this.messageSource.asObservable()
    currentUserApplications = this.userApplications.asObservable()
    changeMessage(contact: Contact) {
        this.messageSource.next(contact)

    }


}
