import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaltypeComponent } from './approvaltype.component';

describe('ApprovaltypeComponent', () => {
  let component: ApprovaltypeComponent;
  let fixture: ComponentFixture<ApprovaltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovaltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
