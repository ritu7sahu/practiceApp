import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUsersComponent } from './current-users.component';

describe('CurrentUsersComponent', () => {
  let component: CurrentUsersComponent;
  let fixture: ComponentFixture<CurrentUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentUsersComponent]
    });
    fixture = TestBed.createComponent(CurrentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
