import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[DataService]
})
export class InfoComponent implements OnInit {

  info1Received: string[] = [];
  info2Received: string[] = [];

  getInfo1FromService(){
    this.info1Received=this.dataservice.getInfo1();
  }

  getInfo2FromService(){
    this.info1Received=this.dataservice.getInfo2();
  }

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }

}
