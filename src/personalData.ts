import { ContactInfo, Education, Link, Position, Skill } from './types'

export const personalData = 'Example Name'

export const contactInfo: ContactInfo = {
  birthdate: '31.12.1999',
  address: 'example address',
  phone: '0123 4567890',
  mail: 'example@mail',
}

export const workExperience: Position[] = [
  {
    title: 'Developer',
    company: 'ExaComp',
    start: '2022',
    descriptionItems: ['Angular', 'development etc.'],
  },
  {
    title: 'Intern',
    company: 'SomeCorp',
    start: '2020',
    end: '2022',
    descriptionItems: ['JS', 'testing'],
  },
]

export const education: Education[] = [
  {
    title: 'MSc Computer Science',
    school: 'Exa University',
    graduationDate: '2020',
    description: 'C++, Compilers, etc.',
  },
  {
    title: 'BSc Computer Science',
    school: 'Exa University',
    graduationDate: '2018',
    description: 'Software Engineering, Java, etc.',
  },
]

export const aboutMeItems = [
  'Some paragraphs about yourself',
  'motivation, character traits',
  'Soft skills, hobbies, etc.',
]

export const skills: Skill[] = [
  {
    name: 'JS',
    percentage: 100,
  },
  {
    name: 'Backend',
    percentage: 70,
  },
]

export const links: Link[] = [
  {
    description: 'Made with',
    displayName: 'github.com/ResTatic/Ng-CV',
    target: 'https://github.com/ResTatic/Ng-CV',
  },
]
