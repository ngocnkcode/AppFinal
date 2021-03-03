import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-test',
  templateUrl: './contact-test.component.html',
  styleUrls: ['./contact-test.component.css']
})
export class ContactTestComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.email,Validators.required]],
      content: ['', Validators.required]
    })
  }
  onSubmit(){
    console.log(this.formRegister.value)
  }
}

function gmailValidator(FormControl){
  if(FormControl.value.include('@gmail.com')){
    return null
  }
  return {gmail:true}
}