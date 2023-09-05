import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from './card/card.component';
import { UserComponent } from './user/user.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    CardComponent,
    UserComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  exports: [
    CardComponent,
    UserComponent,
    StatsComponent
  ]
})
export class ComponentsModule {
}
