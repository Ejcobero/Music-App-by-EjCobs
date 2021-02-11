import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moira-della-torre-music',
  templateUrl: './moira-della-torre-music.page.html',
  styleUrls: ['./moira-della-torre-music.page.scss'],
})
export class MoiraDellaTorreMusicPage implements OnInit {

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
