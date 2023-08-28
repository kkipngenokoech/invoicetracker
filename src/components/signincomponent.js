import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column
flex: 1;
height: 100%;
align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.div`
  white-space: pre-line;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PasswordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

export default function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberMeChange(event) {
    setRememberMe(event.target.value);
  }

  const handleSubmit = () => {
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    alert(JSON.stringify(userData));
  };
  return (
    <Container>
      <ContentContainer>
        <Title>{"Sign In"}</Title>
        <Form onSubmit={handleSubmit}>
          <Label>EMail</Label>
          <EmailInput type="email" value={email} onChange={handleEmailChange} />
          <Label>Password</Label>
          <PasswordInput
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <CheckboxContainer>
            <RememberMeCheckbox
              type="checkbox"
              value={rememberMe}
              onChange={handleRememberMeChange}
            />
            <CheckboxLabel>Remember Me</CheckboxLabel>
          </CheckboxContainer>
          <SubmitButton type="submit" onClick={handleSubmit}/>
        </Form>
      </ContentContainer>
    </Container>
  );
}
