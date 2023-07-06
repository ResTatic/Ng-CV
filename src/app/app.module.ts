import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { ExperienceComponent } from './experience/experience.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AboutComponent, ExperienceComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
