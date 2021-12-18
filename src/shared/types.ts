// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TEMPORARY_ANY = any

export interface PDFViewer {
  currentPageNumber?: number
  scrollPageIntoView({ pageNumber }: { pageNumber: number }): void
}
