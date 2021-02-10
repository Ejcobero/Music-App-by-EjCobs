import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecemberAvenueMusicPage } from './december-avenue-music.page';

describe('DecemberAvenueMusicPage', () => {
  let component: DecemberAvenueMusicPage;
  let fixture: ComponentFixture<DecemberAvenueMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberAvenueMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecemberAvenueMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
