import { useState } from "react";

export const useHandleRequestSort = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return { order, orderBy, handleRequestSort };
};
