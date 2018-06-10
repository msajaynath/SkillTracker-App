import { HttpClient } from "@angular/common/http";
import { Observable, identity } from "rxjs";
import { Skill } from "../entities/skill";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { ActionStatus } from "../entities/action-status";

@Injectable()
export class SkillService {
    constructor(private http: HttpClient) { }

    getAllSkill(): Observable<Skill[]> {

        return this.http.get<Skill[]>(environment.apiUrl + "/api/getAllSkills");

    }

    updateSkill(skill:Skill): Observable<ActionStatus> {

        return this.http.post<ActionStatus>(environment.apiUrl + "/api/skillUpdate",skill);

    }
    deleteSkill(id:number): Observable<ActionStatus> {

        return this.http.delete<ActionStatus>(environment.apiUrl + "/api/skilldelete?id="+id);

    }
}