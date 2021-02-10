import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IBelongtotheZooMusicPage } from './ibelongtothe-zoo-music.page';

describe('IBelongtotheZooMusicPage', () => {
  let component: IBelongtotheZooMusicPage;
  let fixture: ComponentFixture<IBelongtotheZooMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBelongtotheZooMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IBelongtotheZooMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
