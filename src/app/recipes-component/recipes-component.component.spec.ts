import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesComponentComponent } from './recipes-component.component';

describe('RecipesComponentComponent', () => {
  let component: RecipesComponentComponent;
  let fixture: ComponentFixture<RecipesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesComponentComponent]
    });
    fixture = TestBed.createComponent(RecipesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
