import { makeStyles } from "@material-ui/styles";

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
});

export { useStyles };
