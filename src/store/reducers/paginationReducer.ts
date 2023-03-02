import {
  PaginationAction,
  PaginationActionTypes,
  PaginationState,
} from "src/type/pagination";

const initialState: PaginationState = {
  itemsPerPage: 10,
  skip: 0,
  currentPage: 0,
  totalCount: 0,
};

export const paginationReducer = (
  state = initialState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case PaginationActionTypes.CHANGE_PAGINATION_SUCCESS:
      return {
        ...state,
        itemsPerPage: action.payload.itemsPerPage,
        skip: action.payload.skip,
        currentPage: action.payload.currentPage,
      };
    case PaginationActionTypes.CHANGE_TOTAL_PAGINATION:
      return {
        ...state,
        totalCount: action.payload.totalCount,
      };
    default:
      return state;
  }
};
