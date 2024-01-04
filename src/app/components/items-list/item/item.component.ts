import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: any;
  @Output() itemDataChange:  EventEmitter<any> = new EventEmitter<any>();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter<any>();
  editMode = false;
  
  removeButtonClick(){
    this.removeEvent.emit(this.itemData.id);
  }
  changeItem(changeItem: string){
    this.itemData.name = changeItem;
    this.itemDataChange.emit(this.itemData)
    this.editMode = false;
  }
}


