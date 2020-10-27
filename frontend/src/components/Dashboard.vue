<template>
  <div class="hello">
    <h1>Covid 19 Brasil</h1>
    <form @submit.prevent="getDateValue">
      <label> Estado a ser requisitado </label>
      <select class="form-control" v-model="selected">
        <option v-for="item in items" :value="item.val" :key="item.id">
          {{ item.val }}
        </option>
      </select>
      <p></p>
      <label for="start">Date: </label>
      <input type="date" id="start" name="trip-start"
        min="2020-03-13" max="2020-10-26" 
        v-model="myDate"
        @input.prevent="getDateValue"
      />
      <button @click.prevent="getRequisition">Search</button>
    </form>
    <h1>{{ selected }}</h1> 
    <p>{{ myDate }}</p>
    <Chart :stateData='stateData' />
  </div>
</template>

<script>
  import Chart from '@/components/Chart.vue'

  export default {
    name: 'Dashboard',
    data() {
      return {
        mydate: '2017-07-04',
        stateData: [],
        selected: '',
        items: {
          1:  {id: 1,  val: 'São Paulo'},
          2:  {id: 2,  val: 'Bahia'},
          3:  {id: 3,  val: 'Minas Gerais'},
          4:  {id: 4,  val: 'Rio de Janeiro'},
          5:  {id: 5,  val: 'Ceará'},
          6:  {id: 6,  val: 'Pará'},
          7:  {id: 7,  val: 'Goiás'},
          8:  {id: 8,  val: 'Santa Catarina'},
          9:  {id: 9,  val: 'Rio Grande do Sul'},
          10: {id: 10, val: 'Distrito Federal'},
          11: {id: 11, val: 'Paraná'},
          12: {id: 12, val: 'Maranhão'},
          13: {id: 13, val: 'Pernambuco'},
          14: {id: 14, val: 'Amazonas'},
          15: {id: 15, val: 'Espírito Santo'},
          16: {id: 16, val: 'Mato Grosso'},
          17: {id: 17, val: 'Paraíba'},
          18: {id: 18, val: 'Piauí'},
          19: {id: 19, val: 'Alagoas'},
          20: {id: 20, val: 'Sergipe'},
          21: {id: 21, val: 'Mato Grosso do Sul'},
          22: {id: 22, val: 'Rio Grande do Norte'},
          23: {id: 23, val: 'Tocantins'},
          24: {id: 24, val: 'Rondônia'},
          25: {id: 25, val: 'Roraima'},
          26: {id: 26, val: 'Amapá'},
          27: {id: 27, val: 'Acre'},
        },
      }
    },
    methods: {
      getDateValue() {
        this.mydate = event.target.value
      },

      getRequisition() {
        this.stateData = []
        this.stateData.push(this.myDate)
        this.stateData.push(this.selected)
      },
    },
    components: {
      Chart
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
