import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() name = '';
  @Input() label = '';
  @Input() type: string = "text";
  @Input() value = '';
  @Input() required: boolean = false;
}