"use client";

import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import styles from "./QuestionItem.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "@/app/GlobalRedux/questionsSlice";

export const QuestionItem = ({ question }) => {

  const { id, topic, questionName, difficulty, answerRate, totalAnswers } =
    question;
  console.log(id, topic, questionName, difficulty, answerRate, totalAnswers);
  const dispatch = useDispatch;
  const handleDelete = () => dispatch(deleteQuestion(id));

  return (
    <>
      <p>{id}</p>
      <p>{topic}</p>
      <p>{questionName}</p>
      <p>{difficulty}</p>
      <p>{answerRate}</p>
      <p>{totalAnswers}</p>
      <Link
        // href='/card'
        href={`/card?id=${id}`}
        state={{ question }}
        className={styles.styledLink}
      >
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
