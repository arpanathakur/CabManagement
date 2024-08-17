import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  drivers: any = []; // This should be populated with the list of drivers
  isModalOpen = false;
  isEdit = false;
  selectedDriver: any = null;

  openAddDriverModal() {
    this.isEdit = false;
    this.selectedDriver = null;
    this.isModalOpen = true;
  }

  openEditDriverModal(driver: any) {
    this.isEdit = true;
    this.selectedDriver = driver;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveDriver(driver: any) {
    if (this.isEdit) {
      // Update existing driver logic here
    } else {
      // Add new driver logic here
      this.drivers.push(driver);
    }
    this.isModalOpen = false;
  }

  deleteDriver(driver: any) {
    // this.drivers = this.drivers.filter(c => c !== company);
  }

  bulkDelete() {
    // this.drivers = this.drivers.filter(c => !c.selected);
  }

  isAnyRowSelected() {
    return false;
    // return this.drivers.some(c => c.selected);
  }

  toggleSelectAll(event: any) {
    //const checked = event.target.checked;
    // this.drivers.forEach(c => c.selected = checked);
  }
}
