import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {HttpRequestService} from "../../../core/api/http-request.service";
import {Observable} from "rxjs";
import {GithubReposResponse} from "../models/github-response.interface";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: 'root'})

export class GithubReposService {

  constructor(private http: HttpRequestService) { }

  getGithubRepos(searchText: string, page: number, pageSize: number): Observable<GithubReposResponse> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', pageSize.toString())

    return this.http.get<GithubReposResponse>(`${environment.api.github}${searchText}`, undefined, params )
  }
}

