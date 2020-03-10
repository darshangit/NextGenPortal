import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../service/recruiter.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponentRecruiter implements OnInit {

  constructor(private recruiterService: RecruiterService) { }

  ngOnInit(): void {
    // this.recruiterService.getAll().subscribe(respo => {
    //   console.log('respo', respo);
    // });
  }

}
