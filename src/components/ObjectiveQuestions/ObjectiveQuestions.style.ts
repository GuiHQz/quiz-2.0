import { makeStyles } from "@material-ui/styles";
import { color } from "config/colorThemes";

export const useStyles = makeStyles({ 
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
          //height: "100%",
          //position: "absolute",
          top: 1,
          left: 1,
          background: color.red,
          color: color.white,
          border: "1px solid black",
          fontWeight: 700,
          fontSize: "15px",
          borderRadius: 15,
          //marginLeft: "-70px",
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
      },
      answerButton: {
        margin: "25px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      p: {
        display: "none",
        "&:target": {
          display: "block",
        },
      },
      questionsAlternativeGroup: {
        display: "flex",
        flexWrap: "wrap",
        margin: "50px 50px",
        justifyContent: "center",
      },
      questionsAlternativeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "125px",    
        width: "400px",
        padding: "10px",
        backgroundColor: "#928DAB",
        border: "none",
        fontSize: "20px",
        "&:hover": {
          backgroundColor: "#797394",
          cursor: "pointer",
        },

      },
});