import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInContainerComponent } from './logged-in-container.component';

describe('HomeComponent', () => {
  let component: LoggedInContainerComponent;
  let fixture: ComponentFixture<LoggedInContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
