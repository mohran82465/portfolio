import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience-and-eduction',
  templateUrl: './experience-and-eduction.component.html',
  styleUrls: ['./experience-and-eduction.component.scss']
})
export class ExperienceAndEductionComponent implements AfterViewInit, OnDestroy {
  private progressBar!: HTMLElement;
  private timelineSection!: HTMLElement;

  constructor(private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.progressBar = this.el.nativeElement.querySelector('.timeline_progress-bar');
    this.timelineSection = this.el.nativeElement.querySelector('.section-timeline');
    
    this.setupGSAPAnimation();
  }

  private setupGSAPAnimation() {
    const timelineItems = gsap.utils.toArray('.timeline_item');
    const timelineHeight = this.timelineSection.offsetHeight;

    // Main progress bar animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.timelineSection,
        start: 'top 40%',
        end: 'bottom 80%',
        scrub: true,
        markers: false // Set to true to debug
      }
    });

    tl.to(this.progressBar, {
      height: '100%',
      ease: 'none',
      duration:11
      
    });

    // Item animations
    timelineItems.forEach((item: any) => {
      const itemPosition = item.offsetTop / timelineHeight;
      
      tl.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.3
      }, itemPosition),"<";
    });
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(this.progressBar);
  }
}