import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IBelongtotheZooComponent } from './ibelongtothe-zoo.component';

describe('IBelongtotheZooComponent', () => {
  let component: IBelongtotheZooComponent;
  let fixture: ComponentFixture<IBelongtotheZooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBelongtotheZooComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IBelongtotheZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
