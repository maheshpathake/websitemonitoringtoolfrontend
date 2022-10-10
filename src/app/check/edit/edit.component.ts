import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Check } from '../check';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  check!: Check;
  form!: FormGroup;
  constructor(
    public checkService: CheckService,
    private route: ActivatedRoute,
    private router: Router
  ) {    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['checkId'];
    this.checkService.find(this.id).subscribe((data: Check)=>{
      this.check = data;
  
}); 

this.form = new FormGroup({
  title: new FormControl('', [Validators.required]),
  body: new FormControl('', Validators.required)
});
}

/**
* Write code on Method
*
* @return response()
*/
get f(){
return this.form.controls;
}

/**
* Write code on Method
*
* @return response()
*/
submit(){
console.log(this.form.value);
this.checkService.update(this.id, this.form.value).subscribe((res:any) => {
     console.log('Check updated successfully!');
     this.router.navigateByUrl('check/index');
})
}

}
