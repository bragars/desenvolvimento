import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const findState = async () => {
    return api.post('/graphql', {
        query: '{ findState(state: "Ceará") {state,uf,cases,deaths,suspects} }'
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const allStates = async () => {
    return api.post('/graphql', {
        query: '{ allStates {state } }'
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const allStatesLimit = async () => {
    return api.post('/graphql', {
        query: '{ allStatesLimit(perPage:10, start:1) {state, uf} }'
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const stateFilter = async () => {
    return api.post('/graphql', {
        query: '{ stateFilter(text: "a") {state,uf} }'
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const stateFilterByDate = async (state, date) => {
    return api.post('/graphql', {
        query: `{ stateFilterByDate(state: "${state}", date: "${date}") {state,date,cases,deaths} }`
    })
}

export const AllDatesByState = async () => {
    return api.get(`/state_times/Ceará`)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const Brazil = async () => {
    return api.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/`)
}

export const createUserEmail = async (email) => {
    return api.post('/users', email)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

