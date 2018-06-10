import { Component, OnInit, Inject } from '@angular/core';
import { Skill } from '../entities/skill';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [SkillService]
})
export class SkillComponent implements OnInit {
  dataSource: MatTableDataSource<Skill>;
  allSkill: Skill[];
  displayedColumns = ['Skill_Name','actions'];
  newSkill:string;
  constructor(public snackBar: MatSnackBar,private skillService: SkillService,public dialog: MatDialog) { }

  ngOnInit() {
    this.allSkill = [];
    this.newSkill='';
    this.dataSource = new MatTableDataSource(this.allSkill);
    this.getAllSkill();

  }
  getAllSkill() {
    this.skillService.getAllSkill().subscribe(data => {
      this.allSkill = data;
      this.dataSource = new MatTableDataSource(this.allSkill);

    })
  }
  addSkill()
  {
    this.skillService.updateSkill({Id:0,Skill_Name:this.newSkill}).subscribe(data => {
      this.getAllSkill();
      this.snackBar.open(data.Message, "Ok", {
        duration: 2000,
      });
    })
  }
  delete(id:number)
  {
    this.skillService.deleteSkill(id).subscribe(data => {
      this.snackBar.open(data.Message, "Ok", {
        duration: 2000,
      });

    })
  }

  openEditDialog(skill:Skill): void {
    let dialogRef = this.dialog.open(SkillEditDialog, {
      width: '350px',
      data: { Id: skill.Id, Skill_Name: skill.Skill_Name }
    });
    

  }
}


/**For component edit */

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  providers:[SkillService]
})
export class SkillEditDialog {

  constructor(public snackBar: MatSnackBar,private service:SkillService,
    public dialogRef: MatDialogRef<SkillEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    
    this.dialogRef.close();
    
  }
  edit():void{
    this.service.updateSkill({Skill_Name:this.data.Skill_Name,Id:this.data.Id}).subscribe(data=>{
      this.snackBar.open(data.Message, "Ok", {
        duration: 2000,
      });
      this.dialogRef.close();
    })
   
  }

}