<template>
  <MonsterList
    msg="Thank you for using our product. We're glad you're with us."
  />
</template>

<script>
// @ is an alias to /src
import MonsterList from "@/components/MonsterList.vue";

export default {
  name: "MonsterListView",
  components: {
    MonsterList
  }
};
</script>