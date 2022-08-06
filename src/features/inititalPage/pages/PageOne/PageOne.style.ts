import { makeStyles } from "@material-ui/styles"
import Image from "assets/images/image.jpg"
import { color } from "config/colorThemes"

export const useStyles = makeStyles({
    background: {
        
    },
    header: {
        background: "black",
        padding: "10px",
        color: "white",
        textAlign: "center",
        fontWeight: 500,
    },
    questions: {
        backgroundImage: `url(${process.env.PUBLIC_URL + Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(80%)",
        height: "718px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    boxesRow: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "1350px",
        margin: "150px 0",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
    },
    box: {
        fontFamily: [
            'Mouse Memoirs', 
            'sans-serif',
        ].join(','),
        fontWeight: 700,
        color: color.black,
        background: color.white,
        width: "154.22px",
        height: "127.51px",
        fontSize: "55px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        "&:hover": {
            background: color.lightBlue,
            color: color.black,
        },
    },
})