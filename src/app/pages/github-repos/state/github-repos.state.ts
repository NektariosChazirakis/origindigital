import {GithubReposResponse} from "../models/github-response.interface";
import {Item} from "../models/item.interface";

export interface GithubReposState {
  searchText: string;
  page: number;
  pageSize: number,
  isLoading: boolean;
  githubReposResponse: GithubReposResponse | null
  selectedGithubRepo: Item | null;
  error: any
}

export const initialGithubReposState: GithubReposState = {
  searchText: '',
  page: 1,
  pageSize: 10,
  isLoading: false,
  githubReposResponse: null,
  selectedGithubRepo: null,
  error: null
}
