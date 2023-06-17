import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(){
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes`)
  }

  getRecipe(id: any){
    
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes/${id}`)

  }

  getRecipesWithIngre(ingre: string){
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes?ingredients=${ingre}`)
  }
  // https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes?ingredients=milk|suger|cucumber

}
