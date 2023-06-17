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

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private recipe: RecipesService
    ){}

  showRecipes: boolean = false;

  recipeList: any = []

  IngreFormInp: Array<string> = ['']

  submitIngreForm(){
    // console.log(this.IngreFormInp);
    let ingreSearchStr: string = ''  
    this.IngreFormInp.map(e=>{
      ingreSearchStr == "" ? 
      ingreSearchStr = ingreSearchStr+e:
      ingreSearchStr = ingreSearchStr+'|'+e
    
    })
        this.recipe.getRecipesWithIngre(ingreSearchStr).subscribe(e=>{
          this.recipeList = e
          console.log(e);
          
        })

    // this.ingredient?.value = this.IngreFormInp
    // console.log(this.ingredient?.value);
    this.showRecipes ? 
    ''
    : 
    this.showRecipes = !this.showRecipes

    // getRecipesWithIngre



    // this.showRecipes = !this.showRecipes
  }

  clearTyped(index: any){
    this.IngreFormInp[index] = ''
  }

  eventType(index: any, event: any){
    let typed = event.target.value
    this.IngreFormInp[index] = typed
  }
  onDeleteIredient(i: any){
  this.IngreFormInp.splice(i, 1)
  }

  onAddIngredient(){
    this.IngreFormInp.push("")
  }

  ngOnInit(){


    this.recipe.getRecipes().subscribe((e:any)=>{
      this.recipeList = e
    })
  }
}
