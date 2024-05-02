 import React from 'react'
import { useMyContext } from '../context/context'
 
const Search = () => {
   
  const {query,searchPost}=useMyContext()
   return (
     <input type="text" placeholder='Search here' value={query} onChange={(e)=>{searchPost(e.target.value)} } />
   )
 }
 
 export default Search