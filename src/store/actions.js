import * as types from './mutation-type'

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const signIn = ({commit}) => {
  commit(types.SIGN_OUT)
}
