import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitebuttonComponent } from './invitebutton.component';

describe('InvitebuttonComponent', () => {
  let component: InvitebuttonComponent;
  let fixture: ComponentFixture<InvitebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
