import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCleanCodeBPComponent } from './js-clean-code-bp.component';

describe('JsCleanCodeBPComponent', () => {
  let component: JsCleanCodeBPComponent;
  let fixture: ComponentFixture<JsCleanCodeBPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsCleanCodeBPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCleanCodeBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
