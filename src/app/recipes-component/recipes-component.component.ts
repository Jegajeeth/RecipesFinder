import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css'],
})
export class RecipesComponentComponent {
  constructor(private route: ActivatedRoute) {}

  recipeList: any = [
    {
      id: 52,
      foodImg:
        'https://cdn2.stylecraze.com/wp-content/uploads/2015/06/1.-Low-Fat-Tarragon-Chicken-Salad.jpg.webp',
      name: 'Low-Fat Tarragon Chicken Salad',
      instruction: [
        'Add the chicken breast cubes, salt, and black pepper to a pot of boiling water.',
        'Cook it for 15-20 minutes.',
        'In the meantime, slice the dried cranberries and toss them into a bowl.',
        'Add yogurt, lime juice, sliced red onions, chopped celery, salt, tarragon, and freshly ground black pepper to the bowl and mix well.',
        'Take the cooked chicken breast cubes out and toss them in the bowl. Your low-fat chicken tarragon salad is ready to eat!',
      ],
      ingredients: [
        'chicken breast cubes',
        ' dried cranberries',
        'low-fat yogurt',
        'lime juice',
        'red onions',
        'celery',
        'tarragon',
        'Salt',
        'black pepper',
      ],
      preperationTime: 120,
      servingSize: 3,
    },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const recipeId = route.get('id');

      console.log(recipeId);
    });
  }
}
