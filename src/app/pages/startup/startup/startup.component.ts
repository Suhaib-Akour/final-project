import { Component, OnInit, ViewChild } from '@angular/core';
import { Startup } from 'src/app/core/interfaces/startups';
import { StartupsService } from 'src/app/core/services/startups.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit {
  key: string = '';
  listOfStartups: Startup[] = [];
  totalcompany!: number;
  loading = true;
  constructor(private _startupService: StartupsService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this._startupService.getAll().subscribe((result: any) => {
      if (result) {
        this.listOfStartups = result;
        this.loading = false;
        this.totalcompany = this.listOfStartups.length;
      }
    });
  }
}
