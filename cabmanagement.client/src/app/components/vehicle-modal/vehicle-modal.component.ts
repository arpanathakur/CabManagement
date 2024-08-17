import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrl: './vehicle-modal.component.scss'
})
export class VehicleModalComponent {
  @Input() vehicle: any = {}; // Input property for vehicle data
  @Input() isEdit: boolean = false; // Input property to determine if it's edit mode
  @Output() close = new EventEmitter<void>(); // Event emitter for close action
  @Output() saveChanges = new EventEmitter<any>(); // Renamed event emitter

  // Method to emit close event
  closeModal() {
    this.close.emit();
  }

  // Method to emit saveChanges event with vehicle data
  save() {
    this.saveChanges.emit(this.vehicle);
  }
}
