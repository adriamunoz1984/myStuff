import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpTestComponent } from './perp-test.component';

describe('PerpTestComponent', () => {
  let component: PerpTestComponent;
  let fixture: ComponentFixture<PerpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
