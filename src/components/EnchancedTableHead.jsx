import { visuallyHidden } from "@mui/utils";
import { TableHead, TableRow,TableCell,TableSortLabel,Box } from "@mui/material";

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

export const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
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