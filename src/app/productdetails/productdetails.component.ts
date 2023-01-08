import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  selectProdId: number = 0;
  prodInformation: any;
  
  constructor(private activatedRoute:ActivatedRoute, private httpClient:HttpClient){

  }
  ngOnInit(){
  this.activatedRoute.params.subscribe((params)=>{
    console.log(params,'params');
  this.selectProdId = +params['id'];
 const url= `https://fakestoreapi.com/products/${this.selectProdId}`;
 this.httpClient.get(url).subscribe((response)=>{
  this.prodInformation = response;
 })
  })
  }

}
