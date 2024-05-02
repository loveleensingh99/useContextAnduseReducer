import React from 'react'
import Search from "./Search"
import Stories from "./Stories"
import Pagination from "./Pagination"
import { useMyContext } from '../context/context'

const Home = () => {
    const context=useMyContext()
    console.log("🚀 ~ Home ~ context:", context)
    return (
        <>
            
            <h1>Hellllo</h1>
            <Search />
            <Pagination />
            <Stories />
        </>
    )
}

export default Home