/* tslint:disable */
/* eslint-disable */

export enum Position {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum PageTypes {
  TEXT = 'text',
  QUOTE = 'quote',
}
export interface IChapter {
  title: string
  subtitle: string
  pages: IPage[]
  illustration: string
}

export interface IPage {
  type: PageTypes
  paragraphs: string[]
  animation?: {
    position: Position
    component: () => JSX.Element
  }
}

export interface Book {
  title: string
  slug: string
  chapters: IChapter[]
}
