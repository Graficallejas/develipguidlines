import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularDevelopComponent } from './modular-develop.component';

describe('ModularDevelopComponent', () => {
  let component: ModularDevelopComponent;
  let fixture: ComponentFixture<ModularDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModularDevelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
