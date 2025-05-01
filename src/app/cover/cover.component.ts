import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperienceAndEductionComponent } from "../experience-and-eduction/experience-and-eduction.component";
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-cover',
  imports: [AboutComponent, ExperienceAndEductionComponent,RouterModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent implements AfterViewInit  {


  isMenuOpen = signal(false);
  isParentMenuOpen = signal(false);

  @ViewChild('avatar', { static: false }) avatar!: ElementRef;
  @ViewChild('heading', { static: false }) heading!: ElementRef;

  ngAfterViewInit(): void {
    gsap.from(this.avatar.nativeElement, {
      y: -100,
      opacity: 0,
      duration: 2
    });

    gsap.from(this.heading.nativeElement, {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 0.5
    });
  }
  
  
  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }

  toggleParentMenu() {
    this.isParentMenuOpen.update((prev) => !prev);
  }
}

