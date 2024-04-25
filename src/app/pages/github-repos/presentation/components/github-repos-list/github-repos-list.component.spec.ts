import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReposListComponent } from './github-repos-list.component';

describe('BooksListComponent', () => {
  let component: GithubReposListComponent;
  let fixture: ComponentFixture<GithubReposListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubReposListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
