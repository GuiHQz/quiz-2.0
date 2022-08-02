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
        backgroundImage: `url(${process.env.PUBLIC_URL + Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
        height: "718px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
})