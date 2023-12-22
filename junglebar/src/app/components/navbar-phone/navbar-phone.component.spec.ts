import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPhoneComponent } from './navbar-phone.component';

describe('NavbarPhoneComponent', () => {
  let component: NavbarPhoneComponent;
  let fixture: ComponentFixture<NavbarPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
