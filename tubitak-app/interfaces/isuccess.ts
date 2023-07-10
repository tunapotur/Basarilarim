export default interface ISuccess {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface ISuccessCardList {
  successes: ISuccess[];
}
