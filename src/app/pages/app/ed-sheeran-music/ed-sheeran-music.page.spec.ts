import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdSheeranMusicPage } from './ed-sheeran-music.page';

describe('EdSheeranMusicPage', () => {
  let component: EdSheeranMusicPage;
  let fixture: ComponentFixture<EdSheeranMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdSheeranMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdSheeranMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
