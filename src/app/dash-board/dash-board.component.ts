import { Component, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../entities/tile';
import { Graph } from '../entities/graph';
import { Associate } from '../entities/associate';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  displayedColumns = ['Status','Associate_Id','Name','Mobile','Email','actions'];

  tiles:Tile[];
  graphValues:Graph[];
  items:number[];
  materialColors:string[];
  associates:Associate[];
  dataSource: MatTableDataSource<Associate>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { 
    this.items = [6, 11, 17, 21, 45];
    this.materialColors=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B","#00ACC1","#7CB342","#F06292"];
  }

  ngOnInit() {
    this.graphValues=[];
    this.tiles=[];
    this.associates=[];
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
    this.associates.push({Associate_Id:"357272",Mobile:"9048777146",Email:"ajaynathms@test.com",Name:"Ajaynath MS",Status:"blue"});
    this.associates.push({Associate_Id:"357273",Mobile:"9046777146",Email:"asdsd@test.com",Name:"Dhanya ",Status:"green"});
    this.associates.push({Associate_Id:"357274",Mobile:"9048377146",Email:"ajaasasynathms@test.com",Name:"Rintu ",Status:"red"});
    this.associates.push({Associate_Id:"357275",Mobile:"9048977146",Email:"asdasdas@test.com",Name:"Jijo ",Status:"blue"});
    this.associates.push({Associate_Id:"357276",Mobile:"9048277146",Email:"ajaasasdynathms@test.com",Name:"Aravind",Status:"blue"});
    this.associates.push({Associate_Id:"357276",Mobile:"9048147146",Email:"ajayq34q34nathms@test.com",Name:"Devika",Status:"blue"});
    this.dataSource = new MatTableDataSource(this.associates);

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
