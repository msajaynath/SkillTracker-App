import { HttpClient } from "@angular/common/http";
import { Observable, identity } from "rxjs";
import { Skill } from "../entities/skill";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { ActionStatus } from "../entities/action-status";
import { Associate } from "../entities/associate";

@Injectable()
export class DashBoardService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Associate[]> {

        return this.http.get<Associate[]>(environment.apiUrl + "/api/getAllAssociates");

    }

}