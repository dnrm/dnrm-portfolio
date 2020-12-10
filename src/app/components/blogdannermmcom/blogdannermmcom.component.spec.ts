import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdannermmcomComponent } from './blogdannermmcom.component';

describe('BlogdannermmcomComponent', () => {
  let component: BlogdannermmcomComponent;
  let fixture: ComponentFixture<BlogdannermmcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdannermmcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdannermmcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
