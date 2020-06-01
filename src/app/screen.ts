import { Show } from './show';

export class Screen {
  constructor(
    public id: number,
    public name: string,
    public theatreId: number,
    public showList: Show[],
    public rows: number,
    public columns: number
  ) {}
}
