import Container from '@/components/Container'
import styles from './page.module.css'
import Button from '@/components/Button'
import Link from "next/link";
import { QuestionItem } from '@/components/QuestionItem/QuestionItem';

const questions = [
  {
    id: "AF79C",
    topic: "Anatomy",
    questionName: "2.1 Basics",
    difficulty: 88,
    answerRate: "75%",
    totalAnswers: 1156,
    questionContent: "",
  },
  {
    id: "AF78C",
    topic: "Anatomy",
    questionName: "2.1 Basics",
    difficulty: 89,
    answerRate: "73%",
    totalAnswers: 1156,
    questionContent: "",
  },
];

export default function Home() {
  return (
    <Container>
      <Link
        href="/card"
        style={{ textAlign: "end", display: "block", marginBottom: 20 }}
      >
        <Button type="button">Create new</Button>
      </Link>
      <ul className={styles.listForm}>
        <li className={styles.listItem}>
          <p>ID</p>
          <p>Topic</p>
          <p>Question</p>
          <p>Difficulty</p>
          <p>Answer rate</p>
          <p>Total answers</p>
        </li>
        {questions.map((question) => (
          <li key={question.id} className={styles.listItem}>
            <QuestionItem question={question} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
