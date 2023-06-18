"use client"

import Link from "next/link";
import { useState } from "react";
import styles from "./QuestionForm.module.css";
import Button from "../Button";
import { useRouter } from "next/navigation";

export const QuestionForm = () => {
  const [id, setId] = useState("");
  const [topic, setTopic] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const handleChangeId = (e) => setId(e.currentTarget.value);
  const handleChangeTopic = (e) => setTopic(e.currentTarget.value);
  const handleChangeQuestion = (e) => setQuestionName(e.currentTarget.value);
  const handleChangeQuestionContent = (e) =>
    setQuestionContent(e.currentTarget.value);
    
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      id,
      topic,
      questionName,
      questionContent,
    };
    console.log(newQuestion);
    reset();
    router.push("/");
  };

  const reset = () => {
    setId("");
    setTopic("");
    setQuestionName("");
    setQuestionContent("");
  };

  return (
    <form
      autoComplete="off"
        onSubmit={handleSubmit}
      className={styles.styledForm}
    >
      <label htmlFor="question-id">ID</label>
      <input
        type="text"
        name="question-id"
        id="question-id"
        required
        value={id}
        onChange={handleChangeId}
      />
      <label htmlFor="question-topic">Topic</label>
      <input
        type="text"
        name="question-topic"
        id="question-topic"
        required
        value={topic}
        onChange={handleChangeTopic}
      />
      <label htmlFor="question-name">Question name</label>
      <input
        type="text"
        name="question-name"
        id="question-name"
        required
        value={questionName}
        onChange={handleChangeQuestion}
      />
      <label htmlFor="question-content">Question content</label>
      <textarea
        name="question-content"
        id="question-content"
        placeholder=" "
        value={questionContent}
        onChange={handleChangeQuestionContent}
        className={styles.contentInput}
      ></textarea>
      <div className={styles.buttonWrapper}>
        <Link href="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
