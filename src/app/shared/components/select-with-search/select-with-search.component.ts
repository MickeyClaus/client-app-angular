import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-select-with-search",
  templateUrl: "./select-with-search.component.html",
  styleUrls: ["./select-with-search.component.scss"],
})
export class SelectWithSearchComponent implements OnInit {
  _value: string;
  id: number;
  @Input() items;
  @Input() name;
  @Input() value;

  // @Input()
  // set value(value: string) {
  //   this._value = value && Array.isArray(value) ? value : value ? value.toString() : null
  // }
  @Input() disabled: boolean;
  @Input() isMultiple: boolean = false;
  // @Input() controlSet: boolean = false;
  itemsFiltered;
  keyword = "";
  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {    
    this.itemsFiltered = this.items;
    this._value = this.value;
  }

  ngOnChanges(changes) {
    this.itemsFiltered = this.items;
  }

  filter() {
    this.itemsFiltered = this.items.filter((item) =>
      item.name.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  onSelectChange() {  
    this.onChange.emit(this._value);
  }

  clearSearchState() {
    this.keyword = "";
    this.itemsFiltered = this.items;
  }
}
