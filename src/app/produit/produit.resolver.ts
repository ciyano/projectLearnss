import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {ProduitServices} from "./produit.service";

@Injectable()
export class ProduitResolver  implements Resolve<any>{

  constructor(private  produitService : ProduitServices) {
  }
resolve(){
    return this.produitService
}
}
