export type ContactInfo = {
  birthdate?: string
  address?: string
  phone?: string
  mail?: string
}
export type Position = {
  title: string
  company: string
  start: string
  end?: string
  descriptionItems?: string[]
}
export type Education = {
  title: string
  school: string
  graduationDate: string
  description?: string
}
export type Skill = {
  name: string
  percentage: number
}
export type Link = {
  description?: string
  displayName: string
  target: string
}
