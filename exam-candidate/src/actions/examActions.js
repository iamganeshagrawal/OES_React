import { SAVE_EXAM, START_EXAM, CLEAR_ANSWER, ANSWER_QUESTION, SUBMIT_EXAM, MARK_FOR_REVIEW } from '../actions/types';

export const saveExam = (data) => ({
	type: SAVE_EXAM,
	data
});

export const startExam = (data) => ({
	type: START_EXAM,
	data
});

export const clearAnswer = (data) => ({
	type: CLEAR_ANSWER,
	data
});

export const answerQuestion = (data) => ({
	type: ANSWER_QUESTION,
	data
});

export const markForReview = (data) => ({
	type: MARK_FOR_REVIEW,
	data
});

export const submitExam = (data) => ({
	type: SUBMIT_EXAM,
	data
});