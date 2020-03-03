import { ADD_QUESTIONS, UPDATE_CURRENT, UPDATE_ANSWER, CLEAR_ANSWER, MARK_REVIEW, MARK_VISITED, UNMARK_REVIEW } from '../action/questionAction';

const initState = {
    questions: [],
    currentQuestion: -1,
    totalNoOfQuestion: 0,
    answers: []
}

const initAnswerObj = {
    id: null,
    answer: null,
    review: false,
    visited: false
}

export const questionReducer = (state=initState, action) => {
    switch(action.type){
        // ADD QUESTIONS AND THEIR RESPECTIVE BLANK ANSWERS OBJECT ARRAY
        case ADD_QUESTIONS:
            const answers = new Array(action.payload.length).fill(0).map((e,i) => Object.assign({}, initAnswerObj, {id: action.payload[i]["id"]}));
            return ({
                questions: [...action.payload],
                currentQuestion: 0,
                totalNoOfQuestion: action.payload.length,
                answers: answers
            })
        // UPADTE CURRENT QUESTION NO HANDLE
        case UPDATE_CURRENT:
            return ({
                questions: state.questions,
                currentQuestion: action.payload,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers
            })
        // UPADTE ANSWER CASE HANDLE
        case UPDATE_ANSWER:
            return ({
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers.map((ob,i) => (i===action.payload["questionNo"] ? Object.assign({}, ob, {answer:action.payload["answer"]}) : ob))
            })
        // CLEAR ANSWER CASE HANDLE
        case CLEAR_ANSWER:
            return({
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers.map((ob,i) => (i===action.payload ? Object.assign({}, ob, {answer: null}) : ob))
            })
        // UPDATE MARK FOR REVIEW FLAG `true`
        case MARK_REVIEW:
            return({
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers.map((ob, i) => (i===action.payload ? Object.assign({}, ob, {review: true}) : ob))
            })
        // UPDATE MARK FOR REVIEW FLAG `false`
        case UNMARK_REVIEW:
            return({
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers.map((ob, i) => (i===action.payload ? Object.assign({}, ob, {review: false}) : ob))
            })
        // UPDATE VISTED FLAG `true`
        case MARK_VISITED:
            return({
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                totalNoOfQuestion: state.totalNoOfQuestion,
                answers: state.answers.map((ob, i) => (i===action.payload ? Object.assign({}, ob, {visited: true}) : ob))
            })
        // DEFAULT CASE
        default:
            return state;
    }
}

export default questionReducer