<template>
    <div>
        <h2>Cases</h2>
        <canvas id="cases-chart"></canvas>
        <h2>Deaths</h2>
        <canvas id="deaths-chart"></canvas>
        <h2>Cases {{novoDate}}</h2>
        <canvas id="cases"></canvas>
        <h2>Deaths {{novoDate}}</h2>
        <canvas id="deaths"></canvas>
    </div>
</template>

<script>

    import Chart from 'chart.js';
    import axios from 'axios';
    import moment from 'moment';
    import {stateFilterByDate} from '@/services/api.js';

    export default {
        name: 'Chart',
        components: {
        },
        props: {
            stateData: Array
        },
        data() {
            return {
                stateCases: [],
                stateDeaths: [],
                Deaths: '',
                Cases: '',
                dateState: '',
                dateCases: '',
                dateDeaths: '',
                selectedDate: '',
                date : '',
                state : '',
                acumulatedDataCases: '',
                acumulatedDataDeaths: '',
                labelsCasesDates: [],
                labelsDeathsDates: [],
                datasCases: [],
                datasDeaths: [],
                datasCasesArray: '',
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                },
            }
        },
        async updated() {
            this.date = this.stateData[0]
            this.state = this.stateData[1]
            
            const response = await stateFilterByDate(this.state, this.date)

            this.dateState = response.data.data.stateFilterByDate[0].state 
            this.dateCases = response.data.data.stateFilterByDate[0].cases
            this.dateDeaths = response.data.data.stateFilterByDate[0].deaths
            this.selectedDate = response.data.data.stateFilterByDate[0].date

            const { data } = await axios.get('http://localhost:3000/state_times/'+this.state)
            data.forEach(d => {
                const date = moment(d.date).format("D MMM YYYY");

                const {
                    cases,
                    deaths
                } = d

                this.stateCases.push({date, total: cases})
                this.stateDeaths.push({date, total: deaths})

            })

            this.stateCases.map(cases => (
                this.labelsCasesDates.push(cases.date)
            ))
            this.stateCases.map(cases => (
                this.datasCases.push(cases.total)
            ))
            this.stateDeaths.map(cases => (
                this.labelsDeathsDates.push(cases.date)
            ))
            this.stateDeaths.map(cases => (
                this.datasDeaths.push(cases.total)
            ))

            this.datasCasesArray = this.datasCases.map(d => this.myFunction(d))
            this.datasDeathsArray = this.datasDeaths.map(d => this.myFunction(d))
            
            this.acumulatedData = {
                    labels: this.labelsCasesDates,
                    datasets: [
                        { // one line graph
                            label: 'Number of Cases',
                            data: this.datasCasesArray,
                            backgroundColor: [
                                'rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)'
                            ],
                            borderColor: ['#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000',
                            ],
                            borderWidth: 3
                        },
                    ]
            },
            this.acumulatedDataDeaths = {
                    labels: this.labelsDeathsDates,
                    datasets: [
                        { // one line graph
                            label: 'Number of Deaths',
                            data: this.datasDeathsArray,
                            backgroundColor: ['rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)'
                            ],
                            borderColor: ['#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000'
                            ],
                            borderWidth: 3
                    },
                ]
            },
            this.dateDeaths = {
                    labels: this.selectedDate,
                    datasets: [
                        { // one line graph
                            label: 'Number of Deaths',
                            data: this.dateDeaths,
                            backgroundColor: ['rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)','rgba(255,51,51,0.2)'
                            ],
                            borderColor: ['#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000'
                            ],
                            borderWidth: 3
                        },
                    ]
                }
            this.dateCases = {
                    labels: this.selectedDate,
                    datasets: [
                        { // one line graph
                            label: 'Number of Cases',
                            data: this.dateCases,
                            backgroundColor: [
                                'rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)','rgba(54,73,93,.5)'
                            ],
                            borderColor: ['#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000','#ff0000',
                            ],
                            borderWidth: 3
                        },
                    ]
                }
            this.createChart('cases-chart', this.acumulatedData);
            this.createOtherChart('deaths-chart', this.acumulatedDataDeaths);
            this.createOtherChart('deaths', this.dateDeaths);
            this.createOtherChart('cases', this.dateCases);
        },
        methods: {
            createChart(chartId, chartData, chartOptions) {
                const ctx = document.getElementById(chartId);
                new Chart(ctx, {
                    type: 'line',
                    data: chartData,
                    options: chartOptions,
                });
            },
            createOtherChart(chartId, chartData, chartOptions) {
                const ctx = document.getElementById(chartId);
                new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: chartOptions,
                });
            },
            myFunction(num) {
                num = parseInt(num)
                return num;
            },
        },
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
