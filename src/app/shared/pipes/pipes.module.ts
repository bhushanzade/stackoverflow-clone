import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberConvertPipe } from './number-convert.pipe';
import { TimelapsePipe } from './timelapse.pipe';
import { EllipsisPipe } from './ellipsis.pipe';
import { SafeHtmlPipe } from './safehtml.pipe';

const components = [
  NumberConvertPipe,
  TimelapsePipe,
  EllipsisPipe,
  SafeHtmlPipe
]

@NgModule({
  declarations: [...components, ],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
