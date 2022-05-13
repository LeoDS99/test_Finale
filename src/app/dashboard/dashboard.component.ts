import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tipi } from 'src/Object/Type';

import { IActivity } from './models/IActivity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() submitted = new EventEmitter<IActivity>();
  constructor() {}
  Types = Tipi;
  ngOnInit(): void {}
  activityForm = new FormGroup({
    tipo: new FormControl('', Validators.required),
    partecipanti: new FormControl('', Validators.required),
    prezzo: new FormControl('', Validators.required),
  });

  submit() {
    this.submitted.emit(this.activityForm.value);
  }
}
