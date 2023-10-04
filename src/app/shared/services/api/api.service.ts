import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  getAllSyllabusBasedOnSyllabusId(course_subject_id: number, is_global_course_subject: boolean) {
    throw new Error('Method not implemented.');
  }


  // post_form(body: any): Observable<any> {
  //   return this.http
  //     .post<any>(
  //       `${environment.form}?country_no=${this.country_no}&customer_id=${this.customer_id}`,
  //       body
  //     )
  //     .pipe(
  //       map((m) => {
  //         let data = m.data;
  //         let msg = m.message;
  //         return [data, msg];
  //       })
  //     );
  // }
}
