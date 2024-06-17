import { useEffect, useState } from "react";
import { TopBar } from "../../components/TopBar";
import { BackButton } from "../../components/BackButton";

import {
  Container,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Avatar,
  Typography,
} from "@mui/material";
import { EnhancedTableHead } from "../../components/EnchancedTableHead";
import { getComparator } from "../../helpers/helpers";
import { useHandleRequestSort } from "../../hooks/useHandleRequestSort";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const UsersManagementScreen = () => {
  const [users, setUsers] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { order, orderBy, handleRequestSort } = useHandleRequestSort();

  useEffect(() => {
    setLoading(true);
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
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isError) {
    return (
      <>
        <TopBar name="Users Management" />
        <Container>
          <BackButton />
          <Typography>Ooops something went wrong...</Typography>
        </Container>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <TopBar name="Users Management" />
        <Container>
          <BackButton />
          <Typography>Loading...</Typography>
        </Container>
      </>
    );
  }
  return (
    <>
      <TopBar name="Users Management" />
      <Container>
        <BackButton />
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
