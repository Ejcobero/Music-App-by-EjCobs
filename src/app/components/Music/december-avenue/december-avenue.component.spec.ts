import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecemberAvenueComponent } from './december-avenue.component';

describe('DecemberAvenueComponent', () => {
  let component: DecemberAvenueComponent;
  let fixture: ComponentFixture<DecemberAvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberAvenueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecemberAvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
