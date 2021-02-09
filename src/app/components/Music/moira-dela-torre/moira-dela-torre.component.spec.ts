import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoiraDelaTorreComponent } from './moira-dela-torre.component';

describe('MoiraDelaTorreComponent', () => {
  let component: MoiraDelaTorreComponent;
  let fixture: ComponentFixture<MoiraDelaTorreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiraDelaTorreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoiraDelaTorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
