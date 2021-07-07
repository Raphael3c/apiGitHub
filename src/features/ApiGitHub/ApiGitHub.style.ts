import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  container:{
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },

  MuiCardRoot:{
    background: "#8338EC",
    height: "80vh",
    width: "40vw",
  },

  searcherContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginLeft: "8px",
  },
});