import { Component, OnInit } from '@angular/core';
import { Check } from '../check';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  checks: Check[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public checkService: CheckService) { }

  ngOnInit(): void {
    console.log("Calling")
    this.checkService.getAll().subscribe((data: Check[])=>{
      this.checks = data;
      console.log(this.checks);
    })  
  }
  
  deleteCheck(id:number){
    this.checkService.delete(id).subscribe(res => {
         this.checks = this.checks.filter(item => item.id !== id);
         console.log('Check deleted successfully!');
    })
  }
}
