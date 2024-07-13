import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLinkBannerComponent } from './app-link-banner.component';

describe('AppLinkBannerComponent', () => {
  let component: AppLinkBannerComponent;
  let fixture: ComponentFixture<AppLinkBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLinkBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppLinkBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
