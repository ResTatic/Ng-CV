import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { aboutMeItems, links, skills } from '../../personalData'

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutMeItems = aboutMeItems
  skills = skills
  links = links
}
