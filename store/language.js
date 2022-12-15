// STATE
export const state = () => ({
  chosenLanguage: 'english'
})

// ACTIONS
// none

// MUTATIONS
export const mutations = {
  ChangeLanguage(state, value) {
    state.chosenLanguage = value
  }
}

// GETTERS
export const getters = {
  ChosenLanguageGetter(state) {
    return state.chosenLanguage
  }
}
