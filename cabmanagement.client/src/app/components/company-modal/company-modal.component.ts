import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss']
})
export class CompanyModalComponent {
  @Input() company: any = {}; // Input property for company data
  @Input() isEdit: boolean = false; // Input property to determine if it's edit mode
  @Output() close = new EventEmitter<void>(); // Event emitter for close action
  @Output() saveChanges = new EventEmitter<any>(); // Renamed event emitter

  // Method to emit close event
  closeModal() {
    this.close.emit();
  }

  // Method to emit saveChanges event with company data
  save() {
    this.saveChanges.emit(this.company);
  }
}
