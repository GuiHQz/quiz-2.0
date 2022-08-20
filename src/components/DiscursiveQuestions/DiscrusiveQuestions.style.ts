import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

const useStyles = makeStyles({
  content: {
    position: "fixed",
    background: "linear-gradient(to bottom, #e0eafc, #cfdef3)",
    border:"2px solid darkblue",
    minHeight: 680,
    minWidth: 1180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    right: 200,
    left: 200,
    top: 10,
    bottom: 10,
  },
  button: {
    "& .MuiButton-root": {
      color: color.black,
      backgroundColor: color.white,
      "&:hover": {
        backgroundColor: color.black,
        color: color.white
      }
    },
  },
  closeButton: {
    "&.MuiButton-root": {
      height: "100%",
      position: "absolute",
      background: color.red,
      color: color.white,
      border: "1px solid black",
      fontWeight: 700,
      fontSize: "30px",
      borderRadius: 14,
      marginLeft: "-70px",
      "&:hover": {
        backgroundColor: "#c20404",
        color: color.white,
      }
    }
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 40,
  },
  answer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 30,
  }
});

export { useStyles };
