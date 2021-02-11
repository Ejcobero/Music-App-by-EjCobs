import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-december-avenue-music',
  templateUrl: './december-avenue-music.page.html',
  styleUrls: ['./december-avenue-music.page.scss'],
})
export class DecemberAvenueMusicPage implements OnInit {

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
