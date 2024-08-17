import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {
  vehicles: any = []; // This should be populated with the list of vehicles
  isModalOpen = false;
  isEdit = false;
  selectedVehicle: any = null;

  openAddVehicleModal() {
    this.isEdit = false;
    this.selectedVehicle = null;
    this.isModalOpen = true;
  }

  openEditVehicleModal(vehicle: any) {
    this.isEdit = true;
    this.selectedVehicle = vehicle;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveVehicle(vehicle: any) {
    if (this.isEdit) {
      // Update existing vehicle logic here
    } else {
      // Add new vehicle logic here
      this.vehicles.push(vehicle);
    }
    this.isModalOpen = false;
  }

  deleteVehicle(vehicle: any) {
    // this.vehicles = this.vehicles.filter(c => c !== vehicle);
  }

  bulkDelete() {
    // this.vehicles = this.vehicles.filter(c => !c.selected);
  }

  isAnyRowSelected() {
    return false;
    // return this.vehicles.some(c => c.selected);
  }

  toggleSelectAll(event: any) {
    //const checked = event.target.checked;
    // this.vehicles.forEach(c => c.selected = checked);
  }
}
