import { Component ,  ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, signal} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardModule } from '@angular/cdk/clipboard';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  imports: [ClipboardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements  AfterViewInit   {
  email= signal('mohamed.ahmed.mohran@gmail.com');
  phone= signal('+201098187312');
  copyEmail = signal(false) ; 
  copyPhone = signal(false) ; 
  @ViewChild('textHead') text!:ElementRef; 
  @ViewChildren('para') paragraphs!: QueryList<ElementRef>; 
  ngAfterViewInit() {
    
    
    gsap.from(this.text.nativeElement,{
      scrollTrigger:{
        trigger: 'svg',
        start: 'top 90%',
        end: 'bottom 10%', 
        scrub:2 ,
      },
      scale:.2,
      opacity:0,
      y:50,  
      transformOrigin:'center',
      duration:3,
      ease: 'power4.out'
    })
    
    this.paragraphs.forEach((para)=>{
      gsap.from(para.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: para.nativeElement,
          start: 'top 95%',
          end: 'bottom 5%',
          scrub:2
        },
      });
    })

  }

  copyEmailAction(){
    this.copyEmail.set(true); 
    setTimeout(() => {
      this.copyEmail.set(false); 
    }, 5000);
    
  } 
  copyPhoneAction(){
    this.copyPhone.set(true); 
    setTimeout(() => {  
      this.copyPhone.set(false); 
    }, 5000);
    
  } 
}
