import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from "./item-card/item-card.component";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { SliderComponent } from './slider/slider.component';


interface Tech {
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     CommonModule,
     RouterOutlet, 
     ItemCardComponent, 
     ButtonModule, 
     TableModule, 
     DividerModule, 
     ImageModule, 
     SliderComponent,   
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {

  title = 'infopage';

  techs: Tech[] = [
    { title: '.NET', imgUrl: '/stack/assets/imgs/Microsoft_.NET_logo.svg'},
    { title: 'TypeScript', imgUrl: '/stack/assets/imgs/Typescript_logo_2020.svg'},
    { title: 'JavaScript', imgUrl: '/stack/assets/imgs/Unofficial_JavaScript_logo_2.svg.png'},

    { title: 'C#', imgUrl: '/stack/assets/imgs/logo_csharp.png'},

    { title: 'Angular', imgUrl: '/stack/assets/imgs/Angular-Framework-e1649312852136.png'},
    { title: 'PostgreSQL', imgUrl: '/stack/assets/imgs/postgres-removebg-preview.svg'},
    { title: 'Gitlab', imgUrl: '/stack/assets/imgs/logo-extra-whitespace.png'},
    { title: 'Git', imgUrl: '/stack/assets/imgs/tech-Git-Icon-1788C.png'},
    { title: 'HTML5', imgUrl: '/stack/assets/imgs/html.webp'},
    { title: 'CSS', imgUrl: '/stack/assets/imgs/CSS3_logo.svg.png'},
    { title: 'Rest API', imgUrl: '/stack/assets/imgs/rest-api-icon.png'},
    { title: 'Cypress E2E', imgUrl: '/stack/assets/imgs/cypress.webp'},
    { title: 'Docker', imgUrl: '/stack/assets/imgs/docker.png'},
    { title: 'Browserstack', imgUrl: '/stack/assets/imgs/BrowserStack.svg'},
  ];

}
