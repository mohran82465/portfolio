import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: []
})
export class WorksComponent implements AfterViewInit {
  @ViewChild('chevron') chevronContainer!: ElementRef;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      this.chevronContainer.nativeElement.querySelectorAll('i'),
      {
        y: 0,
        opacity: 0.5,
      },
      {
        y: 15,
        opacity: 1,
        duration: 0.8,
        ease: 'power1.inOut',
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      }
    );


    const cards = gsap.utils.toArray<HTMLElement>('.card');
   
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50, // ⬇️ from bottom
      },
      {
        opacity: 1,
        y: 0, // ⬆️ to original position
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          scrub:true,
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );
  });

  }
}