import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() fearureSelected = new EventEmitter<string>();
  
  onSelect(fearure: string){
    this.fearureSelected.emit(fearure);
  }
}
