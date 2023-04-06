const api = "http://localhost:3008/"

export const ApiGet = async (endpoint : string, setState : Function) => {
  try {
    const data = await fetch( api + endpoint)
    const json = await data.json()
    
    setState(json)    
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiPut = async (endpoint : string, onChange : Function, obj : any) => {
  try {
    const options = makeOptions("PUT", obj)
    const data = await fetch(api + endpoint + obj.id, options)
    const json = await data.json()
    
    onChange()        
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiPost = async (endpoint : string, onChange : Function, obj : any) => {
  try {
    const options = makeOptions("POST", obj)
    const data = await fetch(api + endpoint, options)
    const json = await data.json()
    
    onChange()    
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiDelete = async (endpoint : string, onChange : Function, obj : any) => {
  try {    
    const options = makeOptions("DELETE", obj)
    const data = await fetch(api + endpoint + obj.id, options)
    const json = await data.json()
    
    onChange()    
  } 
  catch (error) {
    console.error(error)
  }
}

function makeOptions(method : string, body : any) {
    const opts =  {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    return opts;
  }