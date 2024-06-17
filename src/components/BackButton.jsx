import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      sx={{ mt: 3 }}
      onClick={() => {
        navigate(-1);
      }}
      variant="contained"
    >
      Go back
    </Button>
  );
};
