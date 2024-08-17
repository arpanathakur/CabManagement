import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  companies: any = []; // This should be populated with the list of companies
  isModalOpen = false;
  isEdit = false;
  selectedCompany: any = null;

  openAddCompanyModal() {
    this.isEdit = false;
    this.selectedCompany = null;
    this.isModalOpen = true;
  }

  openEditCompanyModal(company: any) {
    this.isEdit = true;
    this.selectedCompany = company;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCompany(company: any) {
    if (this.isEdit) {
      // Update existing company logic here
    } else {
      // Add new company logic here
      this.companies.push(company);
    }
    this.isModalOpen = false;
  }

  deleteCompany(company: any) {
   // this.companies = this.companies.filter(c => c !== company);
  }

  bulkDelete() {
   // this.companies = this.companies.filter(c => !c.selected);
  }

  isAnyRowSelected() {
    return false;
   // return this.companies.some(c => c.selected);
  }

  toggleSelectAll(event: any) {
    //const checked = event.target.checked;
   // this.companies.forEach(c => c.selected = checked);
  }
}
