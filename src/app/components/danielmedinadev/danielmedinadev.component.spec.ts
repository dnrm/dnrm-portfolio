import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielmedinadevComponent } from './danielmedinadev.component';

describe('DanielmedinadevComponent', () => {
  let component: DanielmedinadevComponent;
  let fixture: ComponentFixture<DanielmedinadevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanielmedinadevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielmedinadevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
