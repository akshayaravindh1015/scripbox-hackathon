import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cust-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Output() remove: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeChip() {
    this.remove.emit(true);
  }
}
