import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

const useStyles = makeStyles({
    button: {
        background: "#8b35fc",
        border: "1px solid black",
        color: color.white,
        height: "50px",
        width: "100px",
        fontWeight: 700,
        outline: "none",
        cursor: "pointer",
        "&:hover": {
            background: "#5802c9",
            border: "1px solid black",
            color: "#1c0140",
        }
    },
});

export { useStyles }