import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination as MaterialPagination, MenuItem, Select } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "src/store/hooks/useTypedSelector";
import { PaginationActionTypes } from "src/type/pagination";
import "./style.scss";

export const Pagination: React.FC = () => {
  const { itemsPerPage, currentPage, totalCount } = useAppSelector(
    (state) => state.pagination,
  );

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: any, value: number) => {
    dispatch({
      type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS,
      payload: { skip: (value - 1) * itemsPerPage, itemsPerPage },
    });
  };

  const handleItemsPerPageChange = (event: any) => {
    dispatch({
      type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS,
      payload: { skip: 0, itemsPerPage: event.target.value },
    });
    searchParams.set("itemsPerPage", event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    searchParams.set("currentPage", currentPage.toString());
    setSearchParams(searchParams);
  }, [currentPage]);

  return (
    <div className="pagination-wrapper">
      <Select
        variant="standard"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <MenuItem value={10}>10</MenuItem>

        <MenuItem value={20}>20</MenuItem>

        <MenuItem value={40}>40</MenuItem>
      </Select>

      <MaterialPagination
        size="small"
        count={totalCount}
        page={currentPage + 1}
        onChange={handleChange}
      />
    </div>
  );
};
