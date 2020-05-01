import * as type from './mutation-type'

export const mutations={
  [type.SIGN_IN] (state, user_payload) {
    state.user = user_payload
  },
  [type.SIGN_OUT] (state) {
    state.user ={}
  }
}
