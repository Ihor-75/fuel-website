import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UniversitiesService } from './../services/universities.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-universities',
  standalone: true,
  providers: [UniversitiesService],
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class UniversitiesComponent implements OnInit {
  constructor(private UniversitiesService: UniversitiesService) {}

  universities: {
    name: string;
    web_pages: string[];
  }[] = [];
  ngOnInit() {
    this.UniversitiesService.getUniversities().subscribe((data: any) => {
      console.log(data);
      this.universities = data;
    });
  }
}
