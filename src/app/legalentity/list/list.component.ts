import { Component, OnInit } from '@angular/core';
import { first, map, take, tap } from 'rxjs';
import { ILegalEntity } from 'src/core/entities/LegalEntity';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  legalentities: ILegalEntity[];

  constructor(
    private httpservice: HttpService,
  ) { }

  ngOnInit(): void {
    this.getLegalEntities();
  }
  public getLegalEntities() {
    this.httpservice.getAll('LegalEntity/GetAll')
      .pipe(tap((e: ILegalEntity[]) => e.sort((a, b) => {
        return a.companyName.localeCompare(b.companyName);
      })))
      .subscribe(
        (legalentities: ILegalEntity[]) => {
          this.legalentities = legalentities;
          console.log(legalentities);
        }
      )
  }
  onDelete(id: string){
    if (confirm("are you sure to delete !!"))
    this.httpservice.delete("LegalEntity/Delete",id).subscribe(result=>{this.getLegalEntities()},
      error=>{console.log(error)})
  }
}
