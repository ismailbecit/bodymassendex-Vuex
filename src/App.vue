
<template>
  <div>
    <b-container>
      <div class="text-center m-5">
        <h3>Body Mass Index Calculate</h3>
      </div>
      <b-row sm="12" class="justify-content-md-center">
        <p v-if="errorMess !== ''">*{{ errorMess }}</p>
        <b-col sm="6">
          <label>Height*</label>
          <b-form-input v-model="height" type="text" placeholder="1.75"></b-form-input>
        </b-col>
        <b-col sm="6">
          <label>Weight*</label>
          <b-form-input v-model="weight" type="number" placeholder="69"></b-form-input>
        </b-col>
      </b-row>

      <b-row sm="12">
        <b-col sm="12">
          <div class="text-center mt-5">
            <b-button variant="outline-primary" size="lg" @click="handlerCalculate">Calculate</b-button>
          </div>
        </b-col>
      </b-row>

      <b-row v-if="showBmi !== 0">
        <ResultBmi :showBmi="showBmi" :showControll="showControll" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { bmiControl } from "./functions/bmiControl.js";
import ResultBmi from "./components/resultBmi.vue";

export default {
  data() {
    return {
      height: "",
      weight: "",
      errorMess: ""
    };
  },
  methods: {
    handlerCalculate() {
      if (this.height !== "" && this.weight !== "") {
        const payload = {
          height: parseFloat(this.height),
          weight: parseInt(this.weight)
        };
        this.$store.commit("calculate/handlerCalculate", payload);
        this.height = ''
        this.weight = ""
        this.errorMess = ""
      } else {
        this.errorMess = "height and weight required"
      }
    }
  },
  computed: {
    ...mapGetters({
      showBmi: "calculate/showBmi",
    }),
    showControll() {
      return bmiControl(this.showBmi);
    }
  },
  components: { ResultBmi }
}
</script>