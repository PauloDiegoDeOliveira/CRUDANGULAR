import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  urlApi = 'https://sistemashomologacao.suafaculdade.com.br/CandidatosEdd/Api/Candidatos';

  constructor(private http: HttpClient) { }

  getElements(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.urlApi);
  }

  createElements(element: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.urlApi, element);
  }

  editElement(element: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(this.urlApi, element);
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}?id=${id}`);
  }
}
