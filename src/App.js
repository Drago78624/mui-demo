import "./styles.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
});

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block"
    }
  }
});

export default function App() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setUsernameErr(false);
    setMessageErr(false);

    if (!username) {
      setUsernameErr(true);
    }
    if (!message) {
      setMessageErr(true);
    }

    if (username && message) {
      console.log(username, message);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Sign up
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={classes.field}
            variant="outlined"
            label="Username"
            color="secondary"
            fullWidth
            required
            error={usernameErr}
          />
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={classes.field}
            variant="outlined"
            label="Message"
            color="secondary"
            fullWidth
            multiline
            rows={5}
            required
            error={messageErr}
          />
          <Button
            className={classes.btn}
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            size="large"
          >
            Send
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}
