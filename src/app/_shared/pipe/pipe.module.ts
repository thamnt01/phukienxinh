import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullUrlPipe } from './full-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FullUrlPipe
  ],
  exports: [
    FullUrlPipe
  ]
})
export class PipeModule { }
