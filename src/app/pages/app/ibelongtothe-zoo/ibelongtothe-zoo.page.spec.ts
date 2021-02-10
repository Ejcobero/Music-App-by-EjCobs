import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IBelongtotheZooPage } from './ibelongtothe-zoo.page';

describe('IBelongtotheZooPage', () => {
  let component: IBelongtotheZooPage;
  let fixture: ComponentFixture<IBelongtotheZooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBelongtotheZooPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IBelongtotheZooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
