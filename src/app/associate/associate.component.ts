import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormControl } from '@angular/forms';  
import { AssociateSkill } from '../entities/associate-skill';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AssociateService } from './associate.service';
@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css'],
  providers:[AssociateService]
})
export class AssociateComponent implements OnInit {
  url = '../../assets/noimage.png';
  autoCtrl: FormControl = new FormControl();
  sub: any;
 Id:number;

  ngOnInit() {
    this.Id=0;
    this.route
      .queryParams
      .subscribe(params => {
        if(params['id'])
        {this.Id=params['id'];}
        this.initAssociate();

      });
  }

  regiForm: FormGroup;  
  
  skills:AssociateSkill[];
  filteredSkill:Observable<string[]>;
  options:string[];
  constructor( private fb: FormBuilder,    private route: ActivatedRoute,private service:AssociateService) {   

  
 
    
  }  

  updateSkill()
  {
    this.skills=[
      {Id:0 ,Rating:5,Skill: {Skill_Name:"HTML5",Id:1}},
      {Id:0 ,Rating:0,Skill:   {Skill_Name:"CSS3",Id:2}},
      {Id:0 ,Rating:6,Skill:   {Skill_Name:"Bootstrap",Id:3}},
      {Id:0 ,Rating:0,Skill:   {Skill_Name:"Angular",Id:4}},
      {Id:0 ,Rating:9,Skill:  {Skill_Name:"Jquery",Id:5}},
      {Id:0 ,Rating:0,Skill:  {Skill_Name:"React",Id:6}}
     ];
     this.createFilterSkill();
     this.filteredSkill = this.autoCtrl.valueChanges
     .pipe(
       startWith(''),
       map(val => this.filter(val))
     );
  }
  initAssociate()
  {
    this.initForm();
    if(this.Id!=undefined&&this.Id!=0)
    {
    this.service.getById(this.Id).subscribe(data=>{
      this.regiForm.patchValue(
        {
          Id:data.Id,
          Associate_Id:data.Associate_Id,
          AssociateName:data.AssociateName,
          Email:data.Email,
          Phone:data.Phone,
          Gender:data.Gender,
          Status:data.Status,
          Level:data.Level,
          Strength:data.Strength,
          Weakness:data.Weakness,
          Remarks:data.Remarks,
          Others:data.Others,
        }
      )
    });
    this.updateSkill();
  }
  }


  initForm()
  {
    this.regiForm = this.fb.group({  
      'Id' : [0,null],  
      'AssociateName' : [null, Validators.required],  
      'Associate_Id' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Phone':[null, Validators.required],  
      'Remarks':[null],  
      'Strength':[null],  
      'Weakness':[null],  
      'Others':[null],  
      'Status':['blue'],  
      'Level':["1"],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])]
        }); 
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  
   createFilterSkill()
  {this.options=[];
    this.skills.forEach(element => {
      this.options.push(element.Skill.Skill_Name);
    });
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
        console.log(this.url);
      }
    }
  }
    
}
