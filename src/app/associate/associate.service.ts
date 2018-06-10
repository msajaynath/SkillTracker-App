import { HttpClient } from "@angular/common/http";
import { Observable, identity } from "rxjs";
import { Skill } from "../entities/skill";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { ActionStatus } from "../entities/action-status";
import { Associate } from "../entities/associate";

@Injectable()
export class AssociateService {
    constructor(private http: HttpClient) { }

    getById(id:number): Observable<Associate> {

        return this.http.get<Associate>(environment.apiUrl + "/api/getAssociateById?id="+id);

    }

}