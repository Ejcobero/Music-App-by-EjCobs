import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';


export interface Music  {
  name: string;
  path: string;
};

@Component({
  selector: 'app-benand-ben',
  templateUrl: './benand-ben.component.html',
  styleUrls: ['./benand-ben.component.scss'],
})
export class BenandBenComponent implements OnInit {

  playlists: Music[] = [
    {
      name: 'Araw-Araw',
      path: './assets/mp3/Ben&Ben-Araw-Araw.webm'
    },
    {
      name: 'Lifetime',
      path: './assets/mp3/Ben&Ben-Lifetime.webm'
    },
    {
      name: 'Pagtingin',
      path: './assets/mp3/Ben&Ben-Pagtingin.webm'
    }
  ];

  activeMusic: Music = null;
  player: Howl = null;

  constructor() { }

  ngOnInit() { }

  start(music: Music) {
    this.player = new Howl({
      src: this.playlists[index].path
    });
    this.player.play();
  }

  togglePlayer(pause) {

  }

  next() {

  }

  prev() {

  }

  seek() {

  }

  updateProgressBar() {

  }
}
