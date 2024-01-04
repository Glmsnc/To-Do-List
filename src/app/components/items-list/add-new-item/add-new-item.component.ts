import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {
  itemForm: FormGroup;
  @Output() addNewItem = new EventEmitter<any>();
  formInvalido = false;
  
  constructor(
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      name:  ['', Validators.required],
    });
  }

  get name(){
    return this.itemForm.get('name');
  }


  sendForm(){
   if(!this.itemForm.valid) return;
    this.addNewItem.emit(this.itemForm.get('name')?.value);
    this.resetForm();
  }

  resetForm(){
    this.itemForm.get('name').setValue('');
    this.itemForm.reset();
  }
}
