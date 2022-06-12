

export const GetDate = (input) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

  
    const fullDate = `${date.toDateString()} ${hour}:${minute <10 ? '0' + minute:minute}`
    const minDate = `${year}-${month<10? '0'+month:month}-${day}`
    console.log(minDate)
   
    return input === 'todo'? fullDate:minDate

}

