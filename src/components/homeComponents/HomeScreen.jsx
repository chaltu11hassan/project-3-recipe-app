import axios from 'axios'
import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import RecipeHolder from './RecipeHolder'

const HomeScreen = () => {  

  const [recipes, setRecipes] = useState([])

  const url = 'https://recipes.devmountain.com'

  const getRecipes =()=>{
    axios.get(`${url}/recipes`).then((res)=>{setRecipes(res.data)
    console.log(res.data)
  })
  }
  useEffect(()=>{
    getRecipes();
  },[])

  return (
    <div>
      <AdBanner />
      <RecipeHolder recipes={recipes} />
    </div>
  )
}

export default HomeScreen;