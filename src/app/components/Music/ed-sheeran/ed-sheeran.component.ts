import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';


export interface Music  {
  name: string;
  path: string;
};

@Component({
  selector: 'app-ed-sheeran',
  templateUrl: './ed-sheeran.component.html',
  styleUrls: ['./ed-sheeran.component.scss'],
})
export class EdSheeranComponent implements OnInit {

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
  isPlaying = false;
  progress = 0;
  @ViewChild('range') range: IonRange;

  constructor() { }

  ngOnInit() {
    this.start;
    this.togglePlayer;
    this.next;
    this.prev;
    this.seek;
    this.updateProgressBar;
  }

  start(music: Music) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [music.path],
      html5: true,
      onplay: () => {
        console.log('onPlay');
        this.isPlaying = true;
        this.activeMusic = music;
        this.updateProgressBar();
      },
      onend: () => {
        console.log('onEnd');

      }
    });
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }

  }

  next() {
    let index = this.playlists.indexOf(this.activeMusic);
    if (index != this.playlists.length - 1 ) {
      this.start(this.playlists[index + 1]);
    } else {
      this.start(this.playlists[0]);
    }

  }

  prev() {
    let index = this.playlists.indexOf(this.activeMusic);
    if (index > 0) {
      this.start(this.playlists[index - 1]);
    } else {
      this.start(this.playlists[this.playlists.length - 1]);
    }

  }

  seek() {
    let newValue: any = this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));

  }

  updateProgressBar() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgressBar();
    }, 1000);
  }
}
