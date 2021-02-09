import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoComponent } from './olivia-rodrigo.component';

describe('OliviaRodrigoComponent', () => {
  let component: OliviaRodrigoComponent;
  let fixture: ComponentFixture<OliviaRodrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliviaRodrigoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OliviaRodrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
