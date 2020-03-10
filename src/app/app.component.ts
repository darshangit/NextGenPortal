import { Component, OnInit } from '@angular/core';
import { RecruiterService } from './recruiter/service/recruiter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NextGenPortal';
  constructor(private recruiterService: RecruiterService) { }

  ngOnInit(): void {
    // this.recruiterService.getAll().subscribe(respo => {
    //   console.log('respo', respo);
    // });
  }

  
}
