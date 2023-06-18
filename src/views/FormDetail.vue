<template>
  <div>
    <h2>{{ form.formName }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
