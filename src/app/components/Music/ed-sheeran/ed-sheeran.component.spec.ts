import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdSheeranComponent } from './ed-sheeran.component';

describe('EdSheeranComponent', () => {
  let component: EdSheeranComponent;
  let fixture: ComponentFixture<EdSheeranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdSheeranComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdSheeranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
