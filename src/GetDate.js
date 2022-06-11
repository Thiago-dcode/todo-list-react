

export const GetDate = () => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()


    const fullDate = `${date.toDateString()} ${hour}:${minute <10 ? '0' + minute:minute}`
    return fullDate

}

