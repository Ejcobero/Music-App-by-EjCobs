import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoPage } from './olivia-rodrigo.page';

describe('OliviaRodrigoPage', () => {
  let component: OliviaRodrigoPage;
  let fixture: ComponentFixture<OliviaRodrigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliviaRodrigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OliviaRodrigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
