import { makeStyles } from "@material-ui/styles"
import Image from "_assets/img/image.jpg"

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
        color: "white",
        backgroundImage: `url(${process.env.PUBLIC_URL + Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
        margin: 0,
        height: "718px",
    },
})