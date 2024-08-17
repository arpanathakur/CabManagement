import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-driver-modal',
  templateUrl: './driver-modal.component.html',
  styleUrl: './driver-modal.component.scss'
})
export class DriverModalComponent {
  @Input() driver: any = {}; // Input property for driver data
  @Input() isEdit: boolean = false; // Input property to determine if it's edit mode
  @Output() close = new EventEmitter<void>(); // Event emitter for close action
  @Output() saveChanges = new EventEmitter<any>(); // Renamed event emitter

  // Method to emit close event
  closeModal() {
    this.close.emit();
  }

  // Method to emit saveChanges event with driver data
  save() {
    this.saveChanges.emit(this.driver);
  }
}
