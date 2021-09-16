<template>
  <div style="margin: 20px;">
    <kui-orbit-elements v-model="orbitData" size="medium" :inline="true" :read-only="false" :label-width="110"
                        label-align="left"  @change="changeHandle" label-position="left" :col-in-row-count="7" :high-precision="true">
      <template slot="label-a">半长轴(km)</template>
      <template slot="label-date">UTC时刻</template>
    </kui-orbit-elements>
    原始值：{{ orbitData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 'Hello Karman UI!',
      orbitData: {
        a: 42165507.868,
        e: 0.000373,
        i: 4.812524,
        o: 297.738616,
        w: 210.855082,
        m: 202.928973,
        dateTime: '2021-08-27 00:45:46.6460'
      }
    };
  },
  methods:{
    changeHandle(value){
      console.log('轨道根数已发生改变',value)
    }
  }
};
</script>
