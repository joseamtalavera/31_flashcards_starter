
/* eslint-disable no-unused-vars */


import React from "react";
//import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopics } from '../topics/topicsSlice';
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { useSelector } from "react-redux";

export default function Topic() {

  const topics = useSelector(selectTopics);
  const quizzes = useSelector(selectQuizzes);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic?.quizIds?.map((quizId) => quizzes[quizId]) || [];

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
