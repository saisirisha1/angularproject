import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailsbyquery',
  templateUrl: './productdetailsbyquery.component.html',
  styleUrls: ['./productdetailsbyquery.component.scss']
})
export class ProductdetailsbyqueryComponent implements OnInit {
  prodInformation: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.prodInformation = queryParams;
    });
  }

}
