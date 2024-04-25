import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGithubRepoDetailsComponent } from './view-github-repo-details.component';

describe('ViewSpeakerDetailsComponent', () => {
  let component: ViewGithubRepoDetailsComponent;
  let fixture: ComponentFixture<ViewGithubRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGithubRepoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGithubRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
