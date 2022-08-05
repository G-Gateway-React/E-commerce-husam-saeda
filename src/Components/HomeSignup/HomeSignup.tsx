import {
  HomeSignupContainer,
  Input,
  InputContainer,
  InputJoin,
  SignupHeader,
  SignupPara,
} from "./HomeSignup.style";

const HomeSignup: React.FC = () => {
  return (
    <HomeSignupContainer>
      <SignupHeader>SIGN UP FOR UPDATES</SignupHeader>
      <SignupPara>
        Sign up for exclusive early sale access and tailored new arrivals.
      </SignupPara>
      <InputContainer>
        <Input type='email' placeholder="Your email address" />
        <InputJoin>JOIN</InputJoin>
      </InputContainer>
    </HomeSignupContainer>
  );
};
export default HomeSignup;
