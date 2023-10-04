import { Component, EventEmitter, OnInit, Output } from '@angular/core';


interface College {
  course_subject_name: string;

}


@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {
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
      course_subject_name: 'History - Class - VII - Term 1',

    },
    {
      course_subject_name: 'History - Class - VII - Term 1',

    },
    {
      course_subject_name: 'History - Class - VII - Term 1',

    },
  ];

}
