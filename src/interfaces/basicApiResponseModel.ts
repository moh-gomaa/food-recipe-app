export interface BasicApiResponseModel<T> {
  results: T;
  offset: number;
  number: number;
  totalResults: number;
}
