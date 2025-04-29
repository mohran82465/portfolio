import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoverComponent } from "./cover/cover.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [CoverComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
