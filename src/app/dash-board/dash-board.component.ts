import { Component, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../entities/tile';
import { Graph } from '../entities/graph';
import { Associate } from '../entities/associate';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DashBoardService } from './dash-board.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  providers:[DashBoardService]
})
export class DashBoardComponent implements OnInit {
  displayedColumns = ['Picture','Status','Associate_Id','AssociateName','Phone','Email','actions'];

  tiles:Tile[];
  graphValues:Graph[];
  items:number[];
  materialColors:string[];
  materialColorsSet2:string[];
  associates:Associate[];
  dataSource: MatTableDataSource<Associate>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service:DashBoardService) { 
    this.items = [6, 11, 17, 21, 45];
    this.materialColors=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B","#00ACC1","#7CB342","#F06292"];
    this.materialColorsSet2=["#fb8c00","#43a047","#e53935","#00acc1","#8e24aa",
    "#fb8c00","#43a047","#e53935","#00acc1","#8e24aa"]
  }

  ngOnInit() {
    this.graphValues=[];
    this.tiles=[];
    this.associates=[];
    this.dataSource = new MatTableDataSource(this.associates);
    this.tiles.push({title:"Registered Candidates",class:"card-1 col-md-1",value:"15"})
    this.tiles.push({title:"Female Candidates",class:"col-md-1",value:"20%"})
    this.tiles.push({title:"Male Candidates",class:"col-md-1",value:"80%"})
    this.tiles.push({title:"Candidates Freshers",class:"col-md-1",value:"40%"})
    this.tiles.push({title:"Candidates Rated",class:"col-md-1",value:"5"})
    this.tiles.push({title:"Female Candidates Rated",class:"col-md-1",value:"20%"})
    this.tiles.push({title:"Male Candidates Rated",class:"col-md-1",value:"80%"})
    this.tiles.push({title:"Level 1 Candidates",class:"col-md-1",value:"30%"})
    this.tiles.push({title:"Level 2 Candidates",class:"col-md-1",value:"20%"})
    this.tiles.push({title:"Level 3 Candidates",class:"col-md-1",value:"50%"})
    this.graphValues.push({title:"Html",value:50});
    this.graphValues.push({title:"Angular",value:10});
    this.graphValues.push({title:"React",value:30});
    this.graphValues.push({title:".Net Core",value:10});

    this.getAll();
  }
  getAll()
  {
this.service.getAll().subscribe(data=>{

  this.associates=data;
  this.dataSource = new MatTableDataSource(this.associates);
  this.dataSource.sort = this.sort;

})

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getUrl(base64:string)
  {
    return "url('"+base64+"')";
  }

}
