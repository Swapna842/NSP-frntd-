import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlrFormComponent } from './schlr-form.component';

describe('SchlrFormComponent', () => {
  let component: SchlrFormComponent;
  let fixture: ComponentFixture<SchlrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchlrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchlrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
