import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {ICategory} from '../../declaration/ICategory';
import {IProduct} from '../../declaration/IProduct';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[];
  products: IProduct[];
  @Output() getProductsByCategory = new EventEmitter<IProduct[]>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  sendProducts() {
    this.getProductsByCategory.emit(this.products);
    console.log(this.products)
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      if (response && response.status === 1) {
        this.categories = response.result;
      }
    });
  }
  public categoriesById(id) {
    this.categoryService.getCategoriesById(id).subscribe(response => {
      this.products = response.result;
      this.sendProducts();
      });
  }
}
