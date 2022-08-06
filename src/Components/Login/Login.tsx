import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { loginUser } from "../Redux/LoginSlice";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { useState } from "react";
const Login: React.FC =  (): JSX.Element  => {
    const [addRequestStatus, setAddRequestStatus] = useState<string>("idle");
    const dispatch=useAppDispatch()
    const value=useAppSelector(state=>state.reducerLogin.login)
    console.log(value,'value')
    const theme = createTheme();
    
        localStorage.setItem('UserSignup',JSON.stringify(value))
        const reValueToLocalStorge=()=>{
            const valueOfLocal:any=localStorage.getItem('UserSignup')
            let stringValue =JSON.parse(valueOfLocal)
            stringValue =value
            localStorage.setItem('UserSignup',JSON.stringify(stringValue))
        }
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
      const { register, handleSubmit, formState , watch } =
        useForm(validationOpt);
        const onSubmit:SubmitHandler<any> = (data:{ email: string;
            password: string;
            }) => {
                try {
                    console.log(data,'data  ')
                    setAddRequestStatus("pending");
                    
                    dispatch(
                        loginUser({
                            email: watch('email'),
                            password: watch('password'),
                            // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1c2Fta2E1bWFsMDFAZ21haWwuY29tIiwibmFtZSI6ImluaXRpYWxVc2VyLm5hbWUiLCJpYXQiOjE2NTk3NjI1OTZ9.v_6yOquMPXc9oXWrVpcBK-zYqE1Y40Q222TS1l2Gtw8',
                        })
                        ).unwrap();
                    } catch (err) {
                        console.error("Failed to save new post", err);
                    } finally {
                        setAddRequestStatus("idle");
                    }
                    reValueToLocalStorge()
                     console.log(watch('email'),8888888888);
                     return console.log(watch('email'),'watch')
          };
          console.log('llllllllll')
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
            sign in
          </Typography>
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
                  {/* <Typography> {errors.email?.message} </Typography> */}
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
                  label="Remember Me"
                />
              </Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={onSubmit}    
              variant="contained"
              sx={{ mt: 3, mb: 2,background: '#000000', height:'5rem' }}
            >
              REGISTER NOW
            </Button>
          </Box>
          <Grid item>
            <Link sx={{color:'#D1094B'}} href="/signup" variant="body2">
              {"I DON’T HAVE AN ACCOUNT ! CREATE ACCOUNT"}
            </Link>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
