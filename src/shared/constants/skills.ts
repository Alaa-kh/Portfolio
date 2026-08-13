export type SkillCategoryId = 'frontend' | 'backend' | 'mobile' | 'tools'

export type SkillCategory = {
  id: SkillCategoryId
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    skills: ['Node.js', 'REST APIs', 'Databases', 'Authentication'],
  },
  {
    id: 'mobile',
    skills: ['Flutter', 'Dart'],
  },
  {
    id: 'tools',
    skills: [
      'Git',
      'GitHub',
      'Clean Architecture',
      'REST API',
      'State Management',
      'Testing',
    ],
  },
]
