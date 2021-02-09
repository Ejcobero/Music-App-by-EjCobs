import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenandBenComponent } from './benand-ben.component';

describe('BenandBenComponent', () => {
  let component: BenandBenComponent;
  let fixture: ComponentFixture<BenandBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenandBenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenandBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
