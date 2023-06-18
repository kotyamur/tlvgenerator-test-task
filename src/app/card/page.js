import Container from "@/components/Container";
import { QuestionForm } from "@/components/QuestionForm/QuestionForm";

export default function QuestionCard() {
  return (
      <Container>
        <p
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Edit/Create question
        </p>
        <QuestionForm />
      </Container>
  );
}
