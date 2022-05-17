import { Project } from '../types'
import { glowgene } from './glowgene'
import { npure } from './npure'

export const projectKeys: { [key: string]: Project } = {
  npure,
  glowgene,
}

export const projects: Project[] = [npure, glowgene]
