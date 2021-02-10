import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoMusicPage } from './olivia-rodrigo-music.page';

describe('OliviaRodrigoMusicPage', () => {
  let component: OliviaRodrigoMusicPage;
  let fixture: ComponentFixture<OliviaRodrigoMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliviaRodrigoMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OliviaRodrigoMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
