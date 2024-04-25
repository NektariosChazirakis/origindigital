import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReposSearchFilterComponent } from './github-repos-search-filter.component';

describe('SearchBooksComponent', () => {
  let component: GithubReposSearchFilterComponent;
  let fixture: ComponentFixture<GithubReposSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubReposSearchFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubReposSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
