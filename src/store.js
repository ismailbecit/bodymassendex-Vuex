import { createStore } from "vuex"
import Calculate from "./modules/calculate"

export const store = createStore({

    modules: {
        calculate: Calculate
    }
})