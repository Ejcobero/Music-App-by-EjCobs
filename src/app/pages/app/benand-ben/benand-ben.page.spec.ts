import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenandBenPage } from './benand-ben.page';

describe('BenandBenPage', () => {
  let component: BenandBenPage;
  let fixture: ComponentFixture<BenandBenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenandBenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenandBenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
