import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecemberAvenuePage } from './december-avenue.page';

describe('DecemberAvenuePage', () => {
  let component: DecemberAvenuePage;
  let fixture: ComponentFixture<DecemberAvenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberAvenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecemberAvenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
