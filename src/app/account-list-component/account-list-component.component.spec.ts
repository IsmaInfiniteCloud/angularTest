import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListComponentComponent } from './account-list-component.component';

describe('AccountListComponentComponent', () => {
  let component: AccountListComponentComponent;
  let fixture: ComponentFixture<AccountListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
