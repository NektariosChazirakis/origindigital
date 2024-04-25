import {PaginationData} from "../../../core/models/pagination-data.interface";

export interface GithubReposRequest {
  searchText: string;
  paginationData: PaginationData
}
