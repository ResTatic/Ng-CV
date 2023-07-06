import { Component } from '@angular/core'
import { contactInfo, personalData } from '../personalData'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = personalData
  contactInfo = contactInfo
}
