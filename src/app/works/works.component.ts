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
      desc:"Azkary is a simple web application that displays daily prayer times. It integrates multiple APIs to enhance accuracy and user experience. The app retrieves the user's public IP address to determine their approximate location and time zone, then uses this information to fetch precise prayer times from a dedicated prayer time API. Additionally, the app supports localization, allowing users to switch between Arabic and English for a more personalized experience."
    },
    {
      name: "Book Mark landing page", 
      img:'bookmark.png',
      link: 'https://bookmark-landing-page-project.vercel.app/',
      desc: "Book Mark is a simple landing page that showcases smooth scroll-based animations using the GSAP animation library, providing an engaging and visually appealing user experience."
    },
    {
      name: "Bulls and Cows ", 
      img:'bulls.png',
      link: 'https://classy-boba-3afb58.netlify.app/',
      desc: "Bulls and Cows is a simple web-based game where users try to guess a secret number based on feedback given after each attempt. The game’s logic is custom-built, and the interface is designed with Tailwind CSS, offering a clean, responsive layout. The website supports both light and dark modes, allowing users to choose their preferred theme for an enhanced gaming experience."  
     },
    {
      name: "Tailwind landing page", 
      img:'tailwind.png',
      link: 'https://angularlanding.netlify.app/',
      desc: "This landing page is built with Tailwind CSS, offering a clean, responsive, and modern design. It emphasizes utility-first styling to ensure fast development and a visually consistent layout across all screen sizes."  
     },
    {
      name: "code mentor landing page", 
      img:'codementor.png',
      link: 'https://comfy-maamoul-8aebea.netlify.app/',
      desc: "This landing page is built with Tailwind CSS, offering a clean, responsive, and modern design. It emphasizes utility-first styling to ensure fast development and a visually consistent layout across all screen sizes."  
     },
    {
      name: "Inestment Calculator", 
      img:'investmentCalculator.png',
      link: 'https://investment-calculator-neon.vercel.app/',
      desc: "The Investment Calculator is a simple Angular project that utilizes template-driven forms to collect user input and compute projected investment returns. It demonstrates form validation, two-way data binding, and live updates in a clean and user-friendly interface."  
     },
    {
      name: "replic frontend of udemy ", 
      img:'udemy.png',
      link: 'https://github.com/Karim-Abdelkareem/Udemy-Next.JS-UI',
      desc: "This is a front-end replica of Udemy that features a responsive and interactive interface. Users can browse and filter courses, view detailed course pages, and navigate through structured sections like lectures, quizzes, and assignments—offering a realistic simulation of a modern e-learning platform."  
     },
    {
      name: "backend of udemy ", 
      img:'udemy.png',
      link: 'https://github.com/Karim-Abdelkareem/udemy-clone',
      desc: "The backend of this Udemy replica is designed to support a scalable e-learning platform, featuring RESTful APIs for course management, user authentication, enrollment, and content delivery. It handles structured data for lectures, quizzes, and assignments, enabling dynamic interaction between instructors and learners."  
     },
    {
      name: "dashboard of udemy ", 
      img:'udemy.png',
      link: 'https://github.com/Karim-Abdelkareem/Udemy-Admin-Dashboard',
      desc: "The dashboard is built with Angular and provides an intuitive interface for instructors to manage their courses. It includes features like creating and editing courses, uploading lectures, adding quizzes and assignments, and tracking student engagement. The layout is responsive and designed for efficiency, offering a seamless course management experience."  
     },
    {
      name: "Al3sfor Chrome Extension", 
      img:'chromeExtensions.png',
      link: 'https://github.com/Karim-Abdelkareem/udemy-clone',
      desc: "Al3sfor is a Chrome extension that reminds users about upcoming Codeforces contests. It integrates with the Codeforces API to fetch contest schedules and displays them within the extension. Additionally, it sends timely desktop notifications, ensuring competitive programmers never miss a contest."  
     },
    

  ]

}