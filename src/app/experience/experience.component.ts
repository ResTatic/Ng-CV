import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { education, workExperience } from '../../personalData'

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  workExperience = workExperience
  education = education
}
