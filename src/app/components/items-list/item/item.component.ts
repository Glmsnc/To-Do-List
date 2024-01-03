import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: any;
  @Output() removeEvent: EventEmitter<any> = new EventEmitter<any>();

  
  removeButtonClick(){
    console.log('emitting id', this.itemData)
    this.removeEvent.emit(this.itemData);
  }
}


