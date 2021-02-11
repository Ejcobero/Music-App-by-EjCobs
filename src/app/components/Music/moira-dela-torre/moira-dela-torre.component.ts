import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';


export interface Music  {
  name: string;
  path: string;
};

@Component({
  selector: 'app-moira-dela-torre',
  templateUrl: './moira-dela-torre.component.html',
  styleUrls: ['./moira-dela-torre.component.scss'],
})
export class MoiraDelaTorreComponent implements OnInit {

  playlists: Music[] = [
    {
      name: 'Ikaw at Ako',
      path: './assets/mp3/Moira-IkawatAko.webm'
    },
    {
      name: 'Patawad',
      path: './assets/mp3/Moira-Patawad.webm'
    },
    {
      name: 'Patawad, Paalam',
      path: './assets/mp3/Moira-PatawadPaalam.webm'
    },
    {
      name: 'Paubaya',
      path: './assets/mp3/Moira-PAUBAYA .webm'
    },
    {
      name: 'Tagpuan',
      path: './assets/mp3/Moira-Tagpuan.webm'
    },
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
