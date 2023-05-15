export function dateFormatForm(date: Date): string {

    let dateString: string =
    date.getFullYear()+
    "-" +
    (date.getMonth()) +
    "-" +
    date.getDate()

    return dateString;
  }

  export function stringToDate(dateString: string)
  {
    return new Date(parseInt(dateString)).toDateString()
  }

  export function convertFormStringToDate(dateString: string)
  {
    let splitArray = dateString.split("-")

   let date = new Date(parseInt(splitArray[0]), parseInt(splitArray[1]), parseInt(splitArray[2]))

    return date.valueOf().toString()
  }