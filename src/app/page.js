"use client";

import Container from "@/components/Container";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import { QuestionItem } from "@/components/QuestionItem/QuestionItem";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function Home() {
  const isUserLogined = useSelector((state) => state.user.isLogined);

  if (!isUserLogined) {
    redirect("/login");
  }
  const questions = useSelector((state) => state.questions);
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
