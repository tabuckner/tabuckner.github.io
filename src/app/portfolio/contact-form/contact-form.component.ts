import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactFormDataModel } from 'src/app/core/interfaces/contact-form-data-model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    message: new UntypedFormControl(''),
  });


  constructor(private dialogRef: MatDialogRef<ContactFormComponent>) { }

  ngOnInit(): void {
  }

  public onSubmitModal() {
    this.dialogRef.close(this.contactForm.value as ContactFormDataModel);
  }

  onCancelModal() {
    this.dialogRef.close();
  }

}
