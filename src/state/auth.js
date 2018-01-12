import firebase from 'firebase'

const initialState = {
  user: null
};

let unsubscribe = null;
export const enableSync = () => dispatch => {
  dispatch(disableSync());
  unsubscribe = firebase.auth().onAuthStateChanged(
    user => dispatch({ type: 'auth/SET_USER', user }),
    error => console.log(error),
    () => console.log('done')
  )
};

export const disableSync = () => dispatch => {
  if (unsubscribe !== null) {
    unsubscribe()
  }
};

export const signIn = (...args) => dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider)
  // return firebase.auth().signInWithEmailAndPassword(...args)
};

export const signUp = (email, password) => dispatch => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
};

export const signOut = () => dispatch => {
  firebase.auth().signOut()
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'auth/SET_USER':
      return {
        user: action.user
      };
    default:
      return state
  }
}