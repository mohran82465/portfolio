import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  loading: boolean = false;
  showToast = false;

  sendEmail(form: NgForm) {
    this.loading = true;

    const templateParams = {
      name: this.name,
      email: this.email,
      title: this.subject,
      message: this.message
    };

    emailjs.send('service_d2ktywm', 'template_o6jdpwb', templateParams, 'cDZbNE5RaM5rSEudq')
      .then((response: EmailJSResponseStatus) => {
        this.resetForm(form); // pass the form
        this.loading = false;
        this.showSuccessToast();

      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send email. Please try again later.');
        this.loading = false;
      });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
  showSuccessToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 5000);
  }


}
