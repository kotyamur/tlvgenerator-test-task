import Container from "@/components/Container";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Logo from "@/components/Logo";

export default function Login() {
  return (
    <main>
      <Container>
        Login
        <Logo />
        <LoginForm />
      </Container>
    </main>
  );
}
