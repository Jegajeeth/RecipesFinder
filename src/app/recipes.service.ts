import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(){
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes`).pipe(
      distinctUntilChanged()
    )
  }

  getRecipe(id: any){
    
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes/${id}`).pipe(
      distinctUntilChanged()
    )

  }

  getRecipesWithIngre(ingre: string){
    return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes?ingredients=${ingre}`).pipe(
      distinctUntilChanged()
      )
    }
    
    getFavourties(){
      return this.http.get(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/favourites`).pipe(
      distinctUntilChanged()
    )
  }

  addFavourties(id: number){
    return this.http.post(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/favourites`, {foodId: id})
  }

  deleteFavourties(id: number){
    return this.http.delete(`https://648c29ea8620b8bae7ec5c1a.mockapi.io/favourites/${id}`)
  }

  // https://648c29ea8620b8bae7ec5c1a.mockapi.io/recipes?ingredients=milk|suger|cucumber

}
