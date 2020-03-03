export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const UPDATE_CURRENT = "UPDATE_CURRENT";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const CLEAR_ANSWER = "CLEAR_ANSWER";
export const MARK_REVIEW = "MARK_REVIEW";
export const UNMARK_REVIEW = "UNMARK_REVIEW";
export const MARK_VISITED = "MARK_VISITED";

export const addQuestions = (questionsArray) => {
    return {
        type: ADD_QUESTIONS,
        payload: questionsArray
    }
}

export const updateCurrent = (n) => {
    return {
        type: UPDATE_CURRENT,
        payload: n
    }
}

export const updateAnswer = ({questionNo, questionId, answer}) => {
    return {
        type: UPDATE_ANSWER,
        payload: {
            questionNo,
            questionId,
            answer
        }
    }
}

export const clearAnswer = (questionNo) => {
    return {
        type: CLEAR_ANSWER,
        payload: questionNo
    }
}

export const markReview = (questionNo) => {
    return {
        type: MARK_REVIEW,
        payload: questionNo
    }
}

export const unmarkReview = (questionNo) => {
    return {
        type: UNMARK_REVIEW,
        payload: questionNo
    }
}

export const markVisited = (questionNo) => {
    return {
        type: MARK_VISITED,
        payload: questionNo
    }
}