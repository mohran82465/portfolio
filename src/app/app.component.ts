import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoverComponent } from "./cover/cover.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { WorksComponent } from "./works/works.component";

@Component({
  selector: 'app-root',
  imports: [CoverComponent, ContactComponent, FooterComponent, HeaderComponent, WorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
