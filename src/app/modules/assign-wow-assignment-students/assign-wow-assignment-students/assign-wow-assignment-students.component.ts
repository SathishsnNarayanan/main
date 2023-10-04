
import { Component,  OnInit,  } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PrepayAndAssignDialogComponent } from '../Components/prepay-and-assign-dialog/prepay-and-assign-dialog.component';
import { AssginWithoutPaymentDialogComponent } from '../Components/assgin-without-payment-dialog/assgin-without-payment-dialog.component';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-assign-wow-assignment-students',
  templateUrl: './assign-wow-assignment-students.component.html',
  styleUrls: ['./assign-wow-assignment-students.component.scss']
})
export class AssignWowAssignmentStudentsComponent implements OnInit {
  panelOpenState = false;

  firstFormGroup: UntypedFormGroup;
  secondFormGroup!:UntypedFormGroup
  ckeConfig!: { allowedContent: boolean; extraPlugins: string; forcePasteAsPlainText: boolean; removePlugins: string; font_names: string; toolbarGroups: { name: string; groups: string[]; }[]; removeButtons: string; };

  showSpinners = true;
  showSeconds = false;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;

  time_picker_value:any
 constructor(
  private _formBuilder: UntypedFormBuilder,
  private dialog:MatDialog

  ) {
    this.firstFormGroup = this._formBuilder.group({

    });

  }

  foods: Food[] = [
    {value: '1', viewValue: 'Assignments Globalized Date (Old to New)'},
    {value: '2', viewValue: 'Assignments Globalized Date (New to Old)'},
    {value: '3', viewValue: 'Avg Global Rating (High to Low)'},
    {value: '4', viewValue: 'Your Rating (High to Low)'},
    {value: '5', viewValue: 'Total No of Global Users to whom this is assigned (High to Low)'},
    {value: '6', viewValue: 'Charges per User. (Low to High)'},
    {value: '7', viewValue: 'Charges per User. (High to Low)'},
  ];

  myGroup = new FormGroup({
    date1: new FormControl('', Validators.required),
    date2: new FormControl('', Validators.required),
    date3: new FormControl('', Validators.required),
    date4: new FormControl('', Validators.required),


    learningOutcome: new FormControl('', Validators.required),

    // selects: new FormControl('', Validators.required),
    // Assignment: new FormControl('', Validators.required),
    // selected: new FormControl('', Validators.required),

  })


  ngOnInit(): void {
    ckeConfig: CKEDITOR.config;


    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf',
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        {
          name: 'paragraph',
          groups: [
            'basicstyles',
            'cleanup',
            'list',
            'indent',
            'blocks',
            'align',
            'bidi',
            'paragraph',
            'spellchecker',
            'colors',
            'links',
          ],
        },
      ],
      removeButtons:
        'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,Outdent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Unlink,Anchor,Flash,orizontalRule,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About',
    };
  }

  openFirstDialog(){
    const dialogRef=this.dialog.open(PrepayAndAssignDialogComponent,{
      disableClose: true,
      minWidth: '400px',
      maxWidth: '650px',
      minHeight: 'auto',
    })
  }

  openSecondDialog(){
    const dialogRef=this.dialog.open(AssginWithoutPaymentDialogComponent,{
      disableClose:true,
      width:'auto',
      height:'auto'
    })
  }


}

