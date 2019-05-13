import axios from 'axios'

export default {
  getData(context, name) {
    let consName = name
    let today = 'today'
    let tomorrow = 'tomorrow'
    let week = 'week'
    let nextWeek = 'nextweek'
    let month = 'month'
    let year = 'year'
    let key = '0db4a6757ed64712b97d60238e8c6bf1'

    function getToday(consName, today) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + today + '&key=' + key)
    }
    function getTomorrow(consName, tomorrow) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + tomorrow + '&key=0db4a6757ed64712b97d60238e8c6bf1')
    }
    function getWeek(consName, week) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + week + '&key=0db4a6757ed64712b97d60238e8c6bf1')
    }
    function getNextWeek(consName, nextWeek) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + nextWeek + '&key=0db4a6757ed64712b97d60238e8c6bf1')
    }
    function getMonth(consName, month) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + month + '&key=0db4a6757ed64712b97d60238e8c6bf1')
    }
    function getYear(consName, year) {
      return axios.get('/api/constellation/getAll?consName=' + consName + '&type=' + year + '&key=0db4a6757ed64712b97d60238e8c6bf1')
    }
  /*  function getConstell() {
      return axios.get('/constellation.json')
    }*/

    axios.all([
      getToday(consName, today),
      getTomorrow(consName, tomorrow),
      getWeek(consName, week),
      getNextWeek(consName, nextWeek),
      getMonth(consName, month),
      getYear(consName, year),
      // getConstell()
    ]).then(axios.spread((today, tomorrow, week, nextWeek, month, year) => {
      this.commit('increment', {today: today.data, tomorrow: tomorrow.data, week: week.data, nextWeek: nextWeek.data, month: month.data, year: year.data})

    }))
  },
  getCon(){
    axios.get('/constellation.json').then(data=>{
      this.commit('getConstell', data.data)
    })
  }
}
