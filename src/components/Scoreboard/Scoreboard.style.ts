import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

export const useStyles = makeStyles({
    score: {
        display: "flex",
        justifyContent: "center",
        height: "15vh",
        width: "100%",
        position: "absolute",
    },
    scorePlayerOne: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 30px",
        fontSize: "60px",
        borderLeft: "2.5px solid black"
    },
    scorePlayerTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 30px",
        fontSize: "60px",
        borderRight: "2.5px solid black"
    },
    content: {
        display: "flex",
        height: "15vh",
        width: "100%",
    },
    playerOne: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.boxes.blue,
        flexGrow: 1,
        borderTop: "5px solid black",
        borderRight: "1.75px solid black",
        borderBottom: "2.5px solid black",
        fontSize: "50px",
    },
    playerTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.boxes.orange,
        flexGrow: 1,
        borderTop: "5px solid black",
        borderLeft: "1.75px solid black",
        borderBottom: "2.5px solid black",
        fontSize: "50px",
    }
})