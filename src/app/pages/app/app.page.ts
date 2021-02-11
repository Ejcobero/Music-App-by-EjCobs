import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Image  {
  name: string;
  path: string;
  url: string;
};


@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  pics: Image[] = [
    {
      name: 'Ben&Ben',
      path: './assets/images/BenBen.jpg',
      url: "/app/benand-ben-music"
    },
    {
      name: 'December Avenue',
      path: './assets/images/december-avenue.jpg',
      url: "/app/december-avenue-music"
    },
    {
      name: 'Ed Sheeran',
      path: './assets/images/EdSheeran.jpg',
      url: "/app/ed-sheeran-music"
    },
    {
      name: 'I Belong to the Zoo',
      path: './assets/images/IBelongToTheZoo.jpg',
      url: "/app/ibelongtothe-zoo-music"
    },
    {
      name: 'Moira Della Torre',
      path: './assets/images/Moira.jpg',
      url: "/app/moira-della-torre-music"
    },
    {
      name: 'Olivia Rodrigo',
      path: './assets/images/Olivia.jpg',
      url: "/app/olivia-rodrigo-music"
    },

  ];

  constructor(private router: Router) { }


  ngOnInit() {
    this.router.navigate(['app']);
  }

}
