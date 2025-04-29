import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  imports: [ FormsModule  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  loading: boolean = false;

  sendEmail() {
    this.loading = true;

    const templateParams = {
      name: this.name,
      from_email: this.email,
      subject: this.subject,
      message: this.message
    };

    emailjs.send('service_d2ktywm', 'template_o6jdpwb', templateParams, 'cDZbNE5RaM5rSEudq')
      .then((response: EmailJSResponseStatus) => {
        this.resetForm();
        this.loading = false;
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send email. Please try again later.');
        this.loading = false;
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
  

}
