import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  @Input() data = [{id: 1, name: 'Item 1'},{id: 2, name: 'Item 2'},{id: 3, name: 'Item 3'},]
  removeCurrentItem(id: any){
    console.log(this.data.filter(item=> item.id == id))
    this.data = this.data.filter(item=> item.id !== id)
  }

  changeItemOnList(itemChange: any){
    this.data = this.data.map(item=> {
      if (item.id !== itemChange.id){
        return item;
      }
      return itemChange;
    })

  }

  addItemOnList(name: any){
    if(name == '') return;
    const id = this.data.length ?
    this.data[this.data.length - 1].id + 1 : 0
    const newItem = {
      id,
      name: name
    }
    this.data.push(newItem);
  }
}
