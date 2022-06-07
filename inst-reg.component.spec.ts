import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstRegComponent } from './inst-reg.component';

describe('InstRegComponent', () => {
  let component: InstRegComponent;
  let fixture: ComponentFixture<InstRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
