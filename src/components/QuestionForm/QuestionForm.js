"use client"

import Link from "next/link";
import { useState } from "react";
import styles from "./QuestionForm.module.css";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addQuestion, editQuestion } from "@/app/GlobalRedux/questionsSlice";
import { useSelector } from "react-redux";

export const QuestionForm = () => {
  const searchParams = useSearchParams();
  const questions = useSelector((state) => state.questions);

  const questId = searchParams.get("id");
      const questionById = questions.find(
        (question) => question.id === questId
        );

  const [id, setId] = useState(questionById?.id || "");
  const [topic, setTopic] = useState(questionById?.topic || "");
  const [questionName, setQuestionName] = useState(
    questionById?.questionName || ""
  );
  const [questionContent, setQuestionContent] = useState(
    questionById?.questionContent || ""
  );

  const handleChangeId = (e) => setId(e.currentTarget.value);
  const handleChangeTopic = (e) => setTopic(e.currentTarget.value);
  const handleChangeQuestion = (e) => setQuestionName(e.currentTarget.value);
  const handleChangeQuestionContent = (e) =>
    setQuestionContent(e.currentTarget.value);
    
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      id,
      topic,
      questionName,
      questionContent,
    };
    console.log(newQuestion);
    if (questId) {
      console.log(questId);
      dispatch(editQuestion(newQuestion));
    } else {
      dispatch(addQuestion(newQuestion));
    }
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
