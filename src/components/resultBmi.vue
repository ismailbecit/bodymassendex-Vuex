<template>
    <div class="mt-5">
        <b-alert class="text-white" show :style="{ background: showControll.color }">
            <h4 class="alert-heading text-center mb-4">{{ showControll.degree }}</h4>
            <hr />
            <p>BMI: {{ showBmi }}</p>
        </b-alert>
    </div>
</template>

<script>

export default ({
    props: ["showBmi", "showControll"],
})
</script>
