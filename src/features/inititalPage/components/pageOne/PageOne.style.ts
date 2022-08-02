import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles ({
    boxesRow: {
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
        color: "black",
        background: "#A6AEF7",
        width: "154.22px",
        height: "127.51px",
        fontSize: "55px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        "&:hover": {
            background: "#4E5FF5",
            color: "white",
        },
    }
});