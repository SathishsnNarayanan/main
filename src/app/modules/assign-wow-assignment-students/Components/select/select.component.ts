import { Component, EventEmitter, OnInit, Output } from '@angular/core';
interface College {
  course_subject_name: string;

}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Output() getSelectedOption = new EventEmitter();
  //* -----------------------  Variable Declaration  -----------------------*//

  data: any[] = [];
  selectedOption!: string | any;
  constructor() { }

  ngOnInit(): void {
  }
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



  course: College[] = [
    {
      course_subject_name: 'Student / Class 1 / Section A',

    },
    {
      course_subject_name: 'Student / Class 1 / Section B',

    },
    {
      course_subject_name: 'Student / Class 1 / Section C',

    },
  ];
}
