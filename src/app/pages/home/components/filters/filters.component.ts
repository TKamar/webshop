import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['sheos', 'sports'];

  constructor() { }

  ngOnInit(): void {
  }


  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
