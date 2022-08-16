import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

const useStyles = makeStyles({
  content: {
    position: "fixed",
    backgroundColor: "red",
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
});

export { useStyles };
