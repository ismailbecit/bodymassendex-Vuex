export const bmiControl = (key) => {
    if (key >= 0 && key <= 18.5) {
        return {
            degree: "Zayıf",
            color: "blue"
        }
    }
    else if (key > 18.5 && key <= 25) {
        return {
            degree: "Normal",
            color: "green"
        }
    }
    else if (key > 25 && key <= 30) {
        return {
            degree: "Fazla Kilou",
            color: "red"
        }

    }
    else if (key > 30 && key <= 35) {
        return {
            degree: "Şişman 1.Derece Obez",
            color: "red"
        }
    }
    else if (key > 35 && key <= 45) {
        return {
            degree: "Şişman 2.Derece Obez",
            color: "red"
        }
    }
    else if (key > 45) {
        return {
            degree: "Aşırı Şişman",
            color: "red"
        }

    }
}