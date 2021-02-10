import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoiraDelaTorrePage } from './moira-dela-torre.page';

describe('MoiraDelaTorrePage', () => {
  let component: MoiraDelaTorrePage;
  let fixture: ComponentFixture<MoiraDelaTorrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiraDelaTorrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoiraDelaTorrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
