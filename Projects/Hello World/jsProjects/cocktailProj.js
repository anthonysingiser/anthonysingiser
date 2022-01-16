import fetch from `node-fetch`

const main = async () => {
  const cocktailResponse = await fetch(`www.thecocktaildb.com/api/json/v1/1/`)
  const cocktailData = await cocktailResponse.json()
  
  console.log(cocktailData)
}

main();



