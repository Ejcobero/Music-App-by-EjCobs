import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {



  constructor(private router: Router) { }

  benben() {
    this.router.navigateByUrl('/app/benand-ben-music');
  }

  ngOnInit() {
  }

}
