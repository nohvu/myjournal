import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "white",
          color: "black",
          boxShadow:
            "0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)",
          ":hover": {
            backgroundColor: "white",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 10%), 0 -1px 0 rgb(0 0 0 / 10%), -1px 0 0 rgb(0 0 0 / 15%), 1px 0 0 rgb(0 0 0 / 15%)",
          },
        },
      },
    },
  },
});
