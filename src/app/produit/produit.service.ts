import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { API_URLS } from "../config/api.url.config";
import {Produit} from "../shared/produit";

@Injectable()
export class ProduitServices{

constructor(private http:HttpClient ) {
}

    getProduits(): Observable<any>{

  return  this.http.get( API_URLS.PRODUIT_URS );
}
     addProduit(produit: Produit): Observable<any>{

       return this.http.post(API_URLS.PRODUIT_URS, produit);
  }
  update(produit: Produit): Observable<any>{
    return  this.http.delete(API_URLS.PRODUIT_URS +produit);
    return this.http.put(API_URLS.PRODUIT_URS , produit);
  }

  deleteProduit(id: number | undefined): Observable<any>{
  return  this.http.delete(API_URLS.PRODUIT_URS + `/${id}`);
}
}
