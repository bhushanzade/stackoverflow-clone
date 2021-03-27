import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  static title: string = '';
  get title(): string { return AppService.title; }
  set title(val: string) { AppService.title = val; }

  static activeTemplate: string = '';
  get activeTemplate(): string { return AppService.activeTemplate; }
  set activeTemplate(val: string) { AppService.activeTemplate = val; }
  
}
