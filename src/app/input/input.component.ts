import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() ngModel: string;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {}

}
