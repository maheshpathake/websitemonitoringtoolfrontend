import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Check } from '../check';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  check!: Check;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public checkService: CheckService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    

   ngOnInit(): void {
    this.id = this.route.snapshot.params['checkId'];
        
    this.checkService.find(this.id).subscribe((data: Check)=>{
      this.check = data;
    });
  }
    

}
