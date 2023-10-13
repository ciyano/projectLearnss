import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {Produit} from "../shared/produit";
import {ProduitService} from "./ProduitService";
import { FormBuilder,FormGroup,Validators,NgModel,FormsModule,ReactiveFormsModule} from "@angular/forms";
import {ProduitServices} from "./produit.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {createObject} from "rxjs/internal/util/createObject";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
// @ts-ignore
export class ProduitComponent implements OnInit {
  // @ts-ignore
   produits: Produit[];
   @Input()
   produitFrom : FormGroup  ;



   operation : string= 'add';
   selectedProduit: Produit;


  constructor(private produitService : ProduitService, private fb:FormBuilder,
              private produitServic : ProduitServices , private  route : ActivatedRoute) {

    this.creatForm();

}
ngOnInit() {
  this.initProduit();
    this.loadProduit();
    ({produits: this.produits} = this.route.snapshot.data);
}
  creatForm(){
  this.produitFrom = this.fb.group({
    ref:  ['', Validators.required],
    quantite: '',
    prixUnitaire: ''
  });
}
loadProduit(){
    this.produitServic.getProduits().subscribe(
      data=>{this.produits = data},
      error => {console.log('An error was occured.')},
      ()=>{console.log('loading produits was done .')}
    )
}

  addProduit(){
    const p = this.produitFrom.value;
    this.produitServic.addProduit(p).subscribe(
      res=>{
        this.initProduit();
        this.loadProduit();
      }
    )
  }
  updateProduit(){
    const p = this.produitFrom.value;
    this.produitServic.update(p).subscribe(
      res=>{
        this.initProduit();
        this.loadProduit()
      }
    )
  }



  initProduit(){
    this.selectedProduit = new Produit();
    this.creatForm()
  }
  ;
  deleteProduit(){
    console.log(this.selectedProduit.id);

    this.produitServic.deleteProduit(this.selectedProduit.id).
    subscribe(res=>{

        this.selectedProduit = new Produit();
        this.loadProduit();
      }
      );
  }



}

