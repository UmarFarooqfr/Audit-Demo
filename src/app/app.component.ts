import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly router: Router){}
  get isAuditFormPage(){
    return this.router.url.includes('/audit-form');
  }
  get isTableFormPage(){
    return this.router.url.includes('/table-form');
  }
}
