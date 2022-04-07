export default {
    namespaced: true,
    state: {
        bmiResult: 0
    },
    getters: {
        showBmi(state) {
            return state.bmiResult
        }
    },
    mutations: {
        handlerCalculate(state, payload) {
            const bmi = payload.height * payload.height
            state.bmiResult = payload.weight / bmi
            return state.bmiResult
        }

    }
}