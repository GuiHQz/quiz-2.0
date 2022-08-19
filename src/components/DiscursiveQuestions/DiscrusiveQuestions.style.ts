import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

const useStyles = makeStyles({
  content: {
    position: "fixed",
    background: "linear-gradient(to top, rgb(0, 180, 219), rgb(0, 131, 176))",
    border:"2px solid darkblue",
    minHeight: 680,
    minWidth: 1180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    bottom: "20px",
    left: "210px",
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
      background: color.white,
      color: color.black,
    }
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
  }
});

export { useStyles };
