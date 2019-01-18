import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public form: FormGroup;
  public productList: FormArray;

  // returns all form groups under contacts
  get productFormGroup() {
    return this.form.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      products: this.fb.array([this.createProduct()])
    });
    // set contactlist to this field
    this.productList = this.form.get('products') as FormArray;
  }

  // contact formgroup
  createProduct(): FormGroup {
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
    });
  }

  // add a contact form group
  addProduct() {
    this.productList.push(this.createProduct());
  }

  // remove contact from group
  removeProduct(index) {
    // this.contactList = this.form.get('products') as FormArray;
    this.productList.removeAt(index);
  }

  // triggered to change validation of value field type
  changedFieldType(index) {
    let validators = null;


    this.getProductsFormGroup(index).controls['value'].setValidators(
      validators
    );

    this.getProductsFormGroup(index).controls['value'].updateValueAndValidity();
  }

  // get the formgroup under contacts form array
  getProductsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.productList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }

}
