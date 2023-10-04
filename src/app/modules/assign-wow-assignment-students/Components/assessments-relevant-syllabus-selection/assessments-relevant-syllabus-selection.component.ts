import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { CustomSpinnerService } from 'src/app/shared/services/custom-spinner/custom-spinner.service';

interface College {
  course_subject_name: string;
  course_subject_type: string;
  educational_institution_name:string,
  educational_institution_country_code: string;
}
@Component({
  selector: 'app-assessments-relevant-syllabus-selection',
  templateUrl: './assessments-relevant-syllabus-selection.component.html',
  styleUrls: ['./assessments-relevant-syllabus-selection.component.scss'],
})
export class AssessmentsRelevantSyllabusSelectionComponent implements OnInit {
  //* --------------------------  Start  -----------------------------------*//

  //* -----------------------  Decorated Methods  --------------------------*//
  @Output() getSelectedOption = new EventEmitter();
  //* -----------------------  Variable Declaration  -----------------------*//

  data: any[] = [];
  selectedOption!: string | any;
  //* ---------------------------  Constructor  ----------------------------*//
  constructor(
    private _apiService: ApiService,
    private _customSpinnerService: CustomSpinnerService
  ) {}

  //* -------------------------  Lifecycle Hooks  --------------------------*//
  ngOnInit(): void {
    // this.getRelevantSyllabusOfYourInterest();
  }
  //* ----------------------------  APIs Methods  --------------------------*//
  // getRelevantSyllabusOfYourInterest() {
  //   this._customSpinnerService.open();
  //   this._apiService.getRelevantSyllabusOfYourInterest().subscribe({
  //     next: (next) => {
  //       this.data = next.data;
  //       this._customSpinnerService.close();
  //     },
  //     error: () => {
  //       this._customSpinnerService.close();
  //     },
  //   });
  // }
  //* --------------------------  Public methods  --------------------------*//

  onSelectSelectedItem(value: any) {
    this.getSelectedOption.emit(value);
  }
  //* ------------------------------ Helper Function -----------------------*//

  //! -------------------------------  End  --------------------------------!//

  course: College[] = [
    {
      course_subject_name: 'Maths-Class - VI - Term 1',
      course_subject_type: 'TamilNadu Samacheer Kalvi',
      educational_institution_name:'GHS',
      educational_institution_country_code: 'IN',
    },
    {
      course_subject_name: 'Maths-Class - VII - Term 2',
      course_subject_type: 'TamilNadu Samacheer Kalvi',
      educational_institution_name:'GHS',
      educational_institution_country_code: 'IN',
    },
    {
      course_subject_name: 'Maths-Class - VIII - Term 2',
      course_subject_type: 'TamilNadu Samacheer Kalvi',
      educational_institution_name:'GHS',
      educational_institution_country_code: 'IN',
    },
  ];
}
