import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

import {DatePipe, JsonPipe} from "@angular/common";
import {Item} from "../../../models/item.interface";


@Component({
  selector: 'app-view-speaker-details',
  standalone: true,
  imports: [
    MatCardModule,
    JsonPipe,
    DatePipe,
  ],
  templateUrl: './view-github-repo-details.component.html',
  styleUrl: './view-github-repo-details.component.scss'
})
export class ViewGithubRepoDetailsComponent implements OnInit {

  githubRepo!: Item;

  ngOnInit() {
    this.githubRepo = history.state.githubRepo;
  }

}
