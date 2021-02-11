import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olivia-rodrigo-music',
  templateUrl: './olivia-rodrigo-music.page.html',
  styleUrls: ['./olivia-rodrigo-music.page.scss'],
})
export class OliviaRodrigoMusicPage implements OnInit {

  constructor(private router: Router) { }

  back() {
    this.router.navigate(['app']);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }


  ngOnInit() {
  }

}
