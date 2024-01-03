import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  @Input() data = [{id: 1, name: 'teste'},{id: 2, name: 'teste2'},{id: 3, name: 'teste3'},]

  removeCurrentItem(id: any){
    this.data = this.data.filter(item=> item.id !== id)

    console.log('teste', this.data)
  }
}
