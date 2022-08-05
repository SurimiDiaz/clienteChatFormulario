export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const CLEAN = "CLEAN";

export function addUser(input) {
  return {
    type: ADD_USER,
    payload: input,
  };
}

export function getUser(input) {
  return {
    type: GET_USER,
    payload: input,
  };
}

export function clean(input) {
  return {
    type: CLEAN,
    payload: input,
  };
}
