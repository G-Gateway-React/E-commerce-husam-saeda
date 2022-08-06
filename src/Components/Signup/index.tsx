import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import apiRequest from "../components/apiRequest";
// import { API_URL } from "../components/apiRequest";
import { Button, Checkbox, FormControlLabel, Link } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../Redux/SignupSlice";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
const theme = createTheme();
interface IFormInput {
  email: string;
  password: string;
  name: string;
}
export interface IUserInfo {
  id: number;
  userName: string;
  email: string;
  password: string;
}
interface Value{
  error:null;
  signup:[];
  status:string
}
const SignUp:React.FC =  ()=> {
  const [users, setUsers] = useState<IUserInfo[]>([]);
  const dispatch = useAppDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState<string>("idle");
  const value=useAppSelector((state) => state.reducer.signup)
  
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("User Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .max(40, "At most Forty letters")
      .min(2, "At least tow letters"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(100)
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } =
    useForm(validationOpt);
  const onSubmit:SubmitHandler<any> = (data:{ email: string;
    password: string;
    name: string}) => {
    try {
      console.log(data,'data  ')
      setAddRequestStatus("pending");

      dispatch(
        addNewUser({
          email: data.email,
          password: data.password,
          name: data.name,
        })
      ).unwrap();
    } catch (err) {
      console.error("Failed to save new post", err);
    } finally {
      setAddRequestStatus("idle");
    }
    return console.log(data,8888888888);
  };
  const { errors } = formState;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #000",
            padding: "1.5rem",
            borderRadius: "6px",
            textAlign: "start",
          }}
        >
          <Typography component="h1" variant="h5">
            CREATE ACCOUNT
          </Typography>
          {formState.isValid && (
            <Box sx={{ color: "#1976d2", textAlign: "left" }}>
              <Typography component="h3" variant="h5">
                All Fields have been passed
              </Typography>
            </Box>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2 }}
            >
            <Grid
              sx={{ color: "#D1094B" }}
              alignItems="flex-start"
              container
              spacing={2}
            >
            <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                  style: { backgroundColor: "white" },
                  }}
                  id="email"
                  placeholder="Email"
                  variant="filled"
                  {...register("email")}
                  autoComplete="email"
                />
                <div>
                {/* <Typography> {errors.email?.message} </Typography> */}
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  fullWidth
                  id="name"
                  placeholder="User Name"
                  variant="filled"
                  {...register("name")}
                />
                {/* <Typography> {errors.name?.message} </Typography> */}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  placeholder="Password"
                  variant="filled"
                  type="password"
                  id="password"
                  {...register("password")}
                />
                {/* <Typography> {errors.password?.message} </Typography> */}
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <FormControlLabel
                  sx={{
                    marginLeft: "0px",
                    marginTop: "1rem",
                    color: "black !important",
                  }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Let's get personal! We'll send you only the good stuff"
                />
              </Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER NOW
            </Button>
          </Box>
          <Grid item>
            <Link href="/login" variant="body2">
              {"I HAVE AN ACCOUNTs"}
            </Link>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;