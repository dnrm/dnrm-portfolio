import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DannermmWebsiteComponent } from './dannermm-website.component';

describe('DannermmWebsiteComponent', () => {
  let component: DannermmWebsiteComponent;
  let fixture: ComponentFixture<DannermmWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DannermmWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DannermmWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
