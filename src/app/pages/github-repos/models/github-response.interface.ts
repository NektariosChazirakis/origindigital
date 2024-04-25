import {Item} from "./item.interface";

export interface GithubReposResponse {
  total_count: number,
  incomplete_results: boolean,
  items: Item[];
}
