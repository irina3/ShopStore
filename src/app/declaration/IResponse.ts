export interface IResponse<T> {
  status?: number;
  errorMessage?: string;
  okMessage?: string;
  result?: T;
}
