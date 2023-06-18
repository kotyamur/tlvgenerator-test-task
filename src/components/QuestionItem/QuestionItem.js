"use client";

import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import styles from "./QuestionItem.module.css";
import Link from "next/link";

export const QuestionItem = ({ question }) => {
  const { id, topic, questionName, difficulty, answerRate, totalAnswers } =
    question;
  console.log(id, topic, questionName, difficulty, answerRate, totalAnswers);

  const handleDelete = () => console.log("delete");

  return (
    <>
      <p>{id}</p>
      <p>{topic}</p>
      <p>{questionName}</p>
      <p>{difficulty}</p>
      <p>{answerRate}</p>
      <p>{totalAnswers}</p>
      <Link href="/card" id={id} state={{ id }} className={styles.styledLink}>
        <RiPencilLine size={28} />
      </Link>
      <button
        type="button"
        onClick={handleDelete}
        className={styles.deleteButton}
      >
        <RiDeleteBin6Line size={28} />
      </button>
    </>
  );
};
