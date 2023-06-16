import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  constructor(private fb: FormBuilder,){}

  ingredientForm = this.fb.group({
    ingredient: [['sdfsd']]
  })

  onClick(){
    console.log(this.ingredient?.value);
    
  }

  get ingredient() {
    return this.ingredientForm.get('ingredient')
  }

}
