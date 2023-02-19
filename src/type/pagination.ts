export type PaginationAction =
  | FetchPaginationSuccessAction
  | FetchPaginationTotalSuccessAction;

export interface PaginationState {
  itemsPerPage: number;
  skip: number;
  currentPage: number;
  totalCount: number;
}

export enum PaginationActionTypes {
  CHANGE_PAGINATION_SUCCESS = "CHANGE_PAGINATION_SUCCESS",
  CHANGE_TOTAL_PAGINATION = "CHANGE_TOTAL_PAGINATION",
}

interface FetchPaginationSuccessAction {
  type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS;
  payload: {
    itemsPerPage: number;
    skip: number;
  };
}

interface FetchPaginationTotalSuccessAction {
  type: PaginationActionTypes.CHANGE_TOTAL_PAGINATION;
  payload: {
    totalCount: number;
  };
}
