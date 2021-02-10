import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdSheeranPage } from './ed-sheeran.page';

describe('EdSheeranPage', () => {
  let component: EdSheeranPage;
  let fixture: ComponentFixture<EdSheeranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdSheeranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdSheeranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
