import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benand-ben-music',
  templateUrl: './benand-ben-music.page.html',
  styleUrls: ['./benand-ben-music.page.scss'],
})
export class BenandBenMusicPage implements OnInit {

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
