  export class Screen {
  constructor(
    public id: number,
    public name: string,
    public theatreId: number,
    public showId: number[],
    public rows: number,
    public columns: number
  ) {}
}
