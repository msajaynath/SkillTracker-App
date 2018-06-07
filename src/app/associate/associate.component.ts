import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {
  url = '../../assets/noimage.png';


  ngOnInit() {
  }
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Address:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  IsAccepted:number=0;  
  skills:string[];
  constructor(private fb: FormBuilder) {   
  
  
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'Name' : [null, Validators.required],  
      'AssociateId' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Phone':[null, Validators.required],  
      'Remarks':[null],  
      'Strength':[null],  
      'Weakness':[null],  
      'Other':[null],  
      'Status':['Blue'],  
      'Level':['Level 1'],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      'IsAccepted':[null]  
    });  
    this.skills=["Jquery","HTML 5","Angular ",".net Core","React JS"]
  
  }  
  
  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }
    
}
