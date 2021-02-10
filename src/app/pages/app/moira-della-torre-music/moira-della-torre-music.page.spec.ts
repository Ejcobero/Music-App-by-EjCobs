import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoiraDellaTorreMusicPage } from './moira-della-torre-music.page';

describe('MoiraDellaTorreMusicPage', () => {
  let component: MoiraDellaTorreMusicPage;
  let fixture: ComponentFixture<MoiraDellaTorreMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiraDellaTorreMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoiraDellaTorreMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
