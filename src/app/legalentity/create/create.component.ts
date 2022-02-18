import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILegalEntity } from 'src/core/entities/LegalEntity';
import { HttpService } from 'src/core/services/http.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  legalEntityForm: FormGroup;
  entity: ILegalEntity;

  constructor(
    private httpservice: HttpService,
    private fb: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.createLegalEntityForm();
  }
  createLegalEntityForm() {
    this.legalEntityForm = this.fb.group({

        companyName :  ['', [Validators.required]] ,
        address :  ['', [Validators.required]] ,
        zipCode :  ['', [Validators.required]] ,
        city :  ['', [Validators.required]] ,
        country :  ['', [Validators.required]] ,
        currency :  ['', [Validators.required]] ,
        activityCode :  ['', [Validators.required]] ,
        codeTva :  ['', [Validators.required]] ,
        identifier1 :  ['', [Validators.required]] ,
        identifier2 :  ['', [Validators.required]] ,
        authorizeDomainName :  ['', [Validators.required]]

      });
    }

  public create() {
    this.entity = this.legalEntityForm.value;

    this.httpservice
      .create('LegalEntity/Post', this.entity)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/legalentity/list']);
        }
      });
  }

}
