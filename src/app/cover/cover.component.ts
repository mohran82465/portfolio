import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperienceAndEductionComponent } from "../experience-and-eduction/experience-and-eduction.component";
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-cover',
  imports: [AboutComponent, ExperienceAndEductionComponent, RouterModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent implements AfterViewInit {

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('mohamed mohran portfolio');
    this.meta.updateTag({ name: 'description', content: 'Hi, i am mohamed mohran a full-stack developer portfolio showcasing Angular, TypeScript, React ,Java, and more.' });

    this.meta.updateTag({ property: 'og:title', content: 'Mohamed Mohran – Portfolio' });
    this.meta.updateTag({ property: 'og:description', content: 'Hi, i am mohamed mohran a full-stack developer portfolio showcasing Angular, TypeScript, React ,Java, and more.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://mohamedmohran.vercel.app/mohran.png' });
  }
  cvPath:string = 'mohamed-mohran-cv.pdf'; 
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
  downloadPdf() {
    const link = document.createElement('a');
    link.href = '/assets/mohamed-mohran-cv.pdf'; // Ensure this is the correct path
    link.setAttribute('download', 'mohamed-mohran-cv.pdf');
    document.body.appendChild(link);  // Append to the DOM (required in some browsers)
    link.click();
    document.body.removeChild(link);  // Clean up the DOM
  }
  
  

}

