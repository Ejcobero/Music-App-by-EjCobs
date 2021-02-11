import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ed-sheeran-music',
  templateUrl: './ed-sheeran-music.page.html',
  styleUrls: ['./ed-sheeran-music.page.scss'],
})
export class EdSheeranMusicPage implements OnInit {

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
