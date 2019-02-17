import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  prorities:string[]=[
    'High','Medium','Low'
  ]
  deparments:object[] =[
    {id:1, name:'ashwini jindal'},
    {id:2, name:'ravi mittal'},
    {id:3, name:'kumar sanu'},
  ]

  constructor(private formBuilder:FormBuilder) {

   }

  ngOnInit() {
    this.firstFormGroup= this.formBuilder.group({
      emailCtrl:['',Validators.required]
    });
    this.secondFormGroup= this.formBuilder.group({
      msgCtrl:['',Validators.required]
    })
  }

}
