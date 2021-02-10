import { Component, OnInit } from '@angular/core';


type MainMusicMenu = {
  title: string;
  url: string;
  index?: number;
};

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  public currentIndex = 0;

  private _pages: MainMusicMenu[] = [
    {
      title: "BenandBen",
      url: "/app/benand-ben",
    },
    {
      title: "December Avenue",
      url: "/app/december-avenue",
    },
    {
      title: "Ed Sheeran",
      url: "/app/ed-sheeran",
    },
    {
      title: "I Belong to the Zoo",
      url: "/app/ibelongtothe-zoo",
    },
    {
      title: "Moira Della Torre",
      url: "/app/moira-dela-torre",
    },
    {
      title: "Olivia Rodrigo",
      url: "/app/olivia-rodrigo",
    },
  ];

  get pages() {
    return this._pages.map((page, index) => {
      page["index"] = index;

      return page;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
