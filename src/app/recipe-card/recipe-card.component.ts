import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  constructor(
    private router: Router, 
    ){}

    @Input() IngreFormInp:Array<string> = []
  @Input() recipeList: any = []
  @Input() showRecipes: boolean = true;

  redirectToRecipe(event: any){
    const id = event.target.id
    this.router.navigate([`/recipe/${id}`]);
    
  }
}
