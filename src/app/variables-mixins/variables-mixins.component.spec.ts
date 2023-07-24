import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesMixinsComponent } from './variables-mixins.component';

describe('VariablesMixinsComponent', () => {
  let component: VariablesMixinsComponent;
  let fixture: ComponentFixture<VariablesMixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablesMixinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
