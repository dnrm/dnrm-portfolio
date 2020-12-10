import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageArchiveComponent } from './home-page-archive.component';

describe('HomePageArchiveComponent', () => {
  let component: HomePageArchiveComponent;
  let fixture: ComponentFixture<HomePageArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
