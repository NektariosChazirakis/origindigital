import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReposTableViewComponent } from './github-repos-table-view.component';

describe('ProductsTableViewComponent', () => {
  let component: GithubReposTableViewComponent;
  let fixture: ComponentFixture<GithubReposTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubReposTableViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubReposTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
