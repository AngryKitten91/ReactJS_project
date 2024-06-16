import { useEffect } from "react";
import { useState } from "react";
import { TopBar } from "../../components/TopBar";

import {
  Container,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Avatar,
  TableSortLabel,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const headCells = [
  {
    id: "id",
    numeric: true,
    label: "id",
  },
  {
    id: "avatar",
    numeric: false,
    label: "Avatar",
  },
  {
    id: "firstName",
    numeric: false,
    label: "First Name",
  },
  {
    id: "lastName",
    numeric: false,
    label: "Last Name",
  },
  {
    id: "email",
    numeric: true,
    label: "Email",
  },
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const UsersManagementScreen = () => {
  const [users, setUsers] = useState(null);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    fetch(USERS_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatUsersData = data.reduce((acc, { id, name, email }) => {
          const [firstName, lastName] = name.split(" ");
          const userData = {
            id,
            email,
            firstName,
            lastName,
            avatar: `${firstName[0]}${lastName[0]}`,
          };
          acc.push(userData);
          return acc;
        }, []);
        setUsers(formatUsersData);
      });
  }, []);
  return (
    <>
      <TopBar name="Users Management" />
      <Container>
        <TableContainer sx={{ mt: 3 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {users &&
                users.sort(getComparator(order, orderBy)).map((item, i) => {
                  const { firstName, lastName, email, id, avatar } = item;
                  return (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{id}</TableCell>
                      <TableCell
                        sx={{ display: "flex", justifyContent: "center" }}
                        align="center"
                      >
                        <Avatar>{avatar}</Avatar>
                      </TableCell>
                      <TableCell align="center">{firstName}</TableCell>
                      <TableCell align="center">{lastName}</TableCell>
                      <TableCell align="center">{email}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default UsersManagementScreen;
