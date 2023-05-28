import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  elementApiUrl = 'https://sistemashomologacao.suafaculdade.com.br/CandidatosEdd/Api/Candidatos';

  constructor(private http: HttpClient) { }


  getElements(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.elementApiUrl);
  }

  createElements(element: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.elementApiUrl, element);
  }

  editElement(element: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(this.elementApiUrl, element);
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?id=${id}`);
  }
}
