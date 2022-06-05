export interface SlideData {
  time: number
  delta: number
  x: number
  y: number
  index: number
  id: number
  movedPieces: MovedPiece[]
}
export interface MovedPiece {
  index: number
  id: number
}

export interface IPuzzleConstructor {
  new (pieces: number[][]): IPuzzle
  new (pieces: number[], width: number): IPuzzle
}
export interface IPuzzle {
  [index: number]: number

  readonly width: number
  readonly height: number
  readonly size: number

  readonly timeCreated: number
  readonly timeStarted: number
  readonly timeSolved: number

  readonly isSolvable: boolean
  readonly isSolving: boolean
  readonly isSolved: boolean

  readonly moves: readonly Readonly<SlideData>[]

  slide(x: number, y: number): Readonly<SlideData> | null
  slide(index: number): Readonly<SlideData> | null
  to2d(): number[][]
}
