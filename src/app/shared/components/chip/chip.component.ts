import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'cust-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  close = faCircleXmark;
  @Input() showRemove: boolean = false;
  @Output() remove: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeChip() {
    this.remove.emit(true);
  }
}
