import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment.prod";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokusaj100';
  environmentName = environment.apiUrl;

}
