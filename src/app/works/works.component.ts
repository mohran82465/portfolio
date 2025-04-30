import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: []
})
export class WorksComponent  {

   list = [
    {
      name: 'Azkary',
      img: 'azkary.png',
      link : 'https://azkary.vercel.app/praytime', 
      desc:"Azkary is a simple web application that displays daily prayer times. It integrates multiple APIs to enhance accuracy and user experience. The app retrieves the user's public IP address to determine their approximate location and time zone, then uses this information to fetch precise prayer times from a dedicated prayer time API."
    }
    
  ]

}