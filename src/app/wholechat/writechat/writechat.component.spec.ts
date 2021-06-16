import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritechatComponent } from './writechat.component';

describe('WritechatComponent', () => {
  let component: WritechatComponent;
  let fixture: ComponentFixture<WritechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritechatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
