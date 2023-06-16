import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {

  constructor(private fb: FormBuilder,private router: Router, private recipe: RecipesService){}

  showRecipes: boolean = false;

  recipeList: any = []
  // [
  //   {
  //     id: 52,
  //     foodImg:
  //       ,
  //     name: 'Low-Fat Tarragon Chicken Salad',
  //     instruction: [
  //       'Add the chicken breast cubes, salt, and black pepper to a pot of boiling water.',
  //       'Cook it for 15-20 minutes.',
  //       'In the meantime, slice the dried cranberries and toss them into a bowl.',
  //       'Add yogurt, lime juice, sliced red onions, chopped celery, salt, tarragon, and freshly ground black pepper to the bowl and mix well.',
  //       'Take the cooked chicken breast cubes out and toss them in the bowl. Your low-fat chicken tarragon salad is ready to eat!',
  //     ],
  //     ingredients: [
  //       'chicken breast cubes',
  //       ' dried cranberries',
  //       'low-fat yogurt',
  //       'lime juice',
  //       'red onions',
  //       'celery',
  //       'tarragon',
  //       'Salt',
  //       'black pepper',
  //     ],
  //     preperationTime: 120,
  //     servingSize: 3,
  //   },
  // ];


  ingredientForm = this.fb.group({
    ingredient: ['g']
  })

  onClick(){
    console.log(this.ingredient?.value);
    this.showRecipes ? "" : this.showRecipes = !this.showRecipes
  }

  redirectToRecipe(event: any){
    const id = event.target.id
    this.router.navigate([`/recipe/${id}`]);
    
  }

  get ingredient() {
    return this.ingredientForm.get('ingredient')
  }
  ngOnInit(){
    this.recipe.getRecipes().subscribe((e:any)=>{
      this.recipeList = e
    })
  }
}
