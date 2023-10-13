import {Produit} from '../shared/produit';
import {Injectable} from "@angular/core";
import {checkInheritanceOfInjectable} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Injectable()
export class ProduitService {



  private  PRODUITS : Produit []=[];

  constructor(){
   /* let  p1: Produit = new Produit('livre', 50, 22);
    let  p2: Produit = new Produit('cahier', 550, 72);
    let  p3: Produit = new Produit('stylo', 150, 72);
    let  p4: Produit = new Produit('cartable', 550, 42);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);*/

  }
  public getPrdouits(): Produit[]{
    return this.PRODUITS ;
  }
}
