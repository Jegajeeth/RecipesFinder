import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css'],
})
export class RecipesComponentComponent {
  constructor(private route: ActivatedRoute, private recipe: RecipesService) {}

  recipes: any = {};
  recipeId: any = '';
  isFav: boolean = false;
  style: string = '';
  favData: any = [];

  updateFavData() {
    this.recipe.getFavourties().subscribe((e: any) => {
      this.favData = e.filter((ele: any) => ele.foodId == this.recipeId);
      this.isFav = this.favData.length == 0 ? false : true;
      this.style = this.isFav
        ? 'background-color: rgb(232, 78, 109);color: #fff;'
        : '';
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      this.recipeId = route.get('id');
      this.recipe.getRecipe(this.recipeId).subscribe((e) => {
        this.recipes = e;
      });
    });

    this.updateFavData();
  }

  handleFav() {
    if (this.isFav) {
      this.recipe.deleteFavourties(this.favData[0]?.id).subscribe(() => {
        this.updateFavData();
        this.isFav = !this.isFav;
      });
    } else {
      this.recipe.addFavourties(this.recipeId).subscribe(() => {
        this.updateFavData();
        this.isFav = !this.isFav;
      });
    }
  }
}
