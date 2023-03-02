import React, { useEffect, useState } from "react";
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
  const [numbering, setNumbering] = useState(Number(searchParams.get("currentPage")));

  const handleChange = (event: any, value: number) => {
    setNumbering(value)
    dispatch({
      type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS,
      payload: { skip: (value - 1) * itemsPerPage, itemsPerPage, currentPage: value },
    });
  };

  const handleItemsPerPageChange = (event: any) => {
    dispatch({
      type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS,
      payload: { skip: 0, itemsPerPage: event.target.value, currentPage },
    });
    searchParams.set("itemsPerPage", event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    searchParams.set("currentPage", numbering > 0 ? numbering.toString() : "1");
    setSearchParams(searchParams);
    dispatch({
      type: PaginationActionTypes.CHANGE_PAGINATION_SUCCESS,
      payload: { skip: (numbering - 1) * itemsPerPage, itemsPerPage, currentPage: numbering },
    });
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

      </Select>

      <MaterialPagination
        size="small"
        count={totalCount}
        page={numbering}
        onChange={handleChange}
      />
    </div>
  );
};
