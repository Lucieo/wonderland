/* tslint:disable */
/* eslint-disable */

export enum Position {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum ParagraphTypes {
  CENSORED = 'censored',
  QUOTE = 'quote',
}
export interface IChapter {
  title: string
  subtitle: string
  pages: IPage[]
  illustration: string
}

export interface IPage {
  paragraphs: Iparagraph[]
  animation?: {
    position: Position
    component: () => JSX.Element
  }
}

export interface Iparagraph {
  content: string
  type?: ParagraphTypes
}


export interface Book {
  title: string
  color: string
  mainImage: string
  abstract: string
  slug: string
  author: string
  chapters: IChapter[]
  homeAnimation?: () => JSX.Element
}
