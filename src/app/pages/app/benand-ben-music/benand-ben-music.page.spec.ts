import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenandBenMusicPage } from './benand-ben-music.page';

describe('BenandBenMusicPage', () => {
  let component: BenandBenMusicPage;
  let fixture: ComponentFixture<BenandBenMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenandBenMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenandBenMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
