import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string;
  constructor(
    private httpservice: HttpService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.createLegalEntityForm();
    if (this.id) {
      this.httpservice.findById("LegalEntity/GetOne", this.id).subscribe((response) => {
        this.entity = response;
        console.log(response);
        this.loadForm();
      });
    }
  }

  private loadForm() {
    this.legalEntityForm.setValue({
      companyName: this.entity.companyName,
      address: this.entity.address,
      zipCode: this.entity.zipCode,
      city: this.entity.city,
      country: this.entity.country,
      currency: this.entity.currency,
      activityCode: this.entity.activityCode,
      codeTva: this.entity.codeTva,
      identifier1: this.entity.identifier1,
      identifier2: this.entity.identifier2,
      authorizeDomainName: this.entity.authorizeDomainName
    })
  }
  createLegalEntityForm() {
    this.legalEntityForm = this.formBuilder.group({

      companyName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      activityCode: ['', [Validators.required]],
      codeTva: ['', [Validators.required]],
      identifier1: ['', [Validators.required]],
      identifier2: ['', [Validators.required]],
      authorizeDomainName: ['', [Validators.required]]

    });
  }

  public onSubmitForm() {
    this.entity = this.legalEntityForm.value;
    if(this.id){
      this.httpservice
        .update('LegalEntity/Patch',this.id, this.entity)
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['/legalentity/list']);
          }
        });
    }
    else {
      this.httpservice
        .create('LegalEntity/Post', this.entity)
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['/legalentity/list']);
          }
        });
    }

  }

}
