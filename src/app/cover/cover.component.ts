import { Component, signal } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperienceAndEductionComponent } from "../experience-and-eduction/experience-and-eduction.component";

@Component({
  selector: 'app-cover',
  imports: [AboutComponent, ExperienceAndEductionComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {

  isMenuOpen = signal(false);
  isParentMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }

  toggleParentMenu() {
    this.isParentMenuOpen.update((prev) => !prev);
  }
}

