import { actionTypes } from "./actionTypes";

export const setUserInfo = (values) => ({
  type: actionTypes.SET_USER_INFO,
  payload: values,
});

export const updateSet = (updatedState) => ({
  type: actionTypes.UPDATE_SET,
  payload: updatedState,
});

export const setPercent = (percent) => ({
  type: actionTypes.SET_PERCENT,
  payload: percent,
});

export const createSet = (newSet) => ({
  type: actionTypes.CREATE_SET,
  payload: newSet,
});

export const deleteSet = (updatedState) => ({
  type: actionTypes.DELETE_SET,
  payload: updatedState,
});

export const editQuestion = (updatedState) => ({
  type: actionTypes.EDIT_QUESTION,
  payload: updatedState,
});

export const addQuestion = (updatedState) => ({
  type: actionTypes.ADD_QUESTION,
  payload: updatedState,
});

export const editInfo = (updatedState) => ({
  type: actionTypes.EDIT_INFO,
  payload: updatedState,
});

export const deleteQuestion = (updatedState) => ({
  type: actionTypes.DELETE_QUESTION,
  payload: updatedState,
});

export const addSet = (newSet) => ({
  type: actionTypes.ADD_SET,
  payload: newSet,
});
