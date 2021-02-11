import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ibelongtothe-zoo-music',
  templateUrl: './ibelongtothe-zoo-music.page.html',
  styleUrls: ['./ibelongtothe-zoo-music.page.scss'],
})
export class IBelongtotheZooMusicPage implements OnInit {

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
