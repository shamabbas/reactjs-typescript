import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { API } from "../../constants";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { setProfile } from "../../redux/actions/profile";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const classes = useStyles();
  const dispatch = useDispatch();

  const onLogin = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${API}login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(login(data?.token, data?.userId));
      dispatch(setProfile(data?.profile));
    } catch (error) {
      setMessage(error?.response?.data);
      setIsMessageOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: window.innerHeight }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onLogin}
              disabled={isLoading}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register">Not regested? register here!</Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        message={message}
        autoHideDuration={3000}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => setIsMessageOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: "250px",
    height: "70px",

    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export { Login };
