import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import axios from "axios";

let API = "http://hn.algolia.com/api/v1/search?"


const initialState = {
    isLoading: false,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],


}



const AppContext = createContext();

const AppProvider = ({ children }) => {
    // const [state, setState] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)


    const searchPost = (searchQUery) => {
        dispatch({ type: "SEARCH_POST", payload: searchQUery })
    }

    const getPrevPage = () => {
        dispatch({ type: "PREV_PAGE" })
    }


    const getNextPage = () => {
        dispatch({ type: "NEXT_PAGE" })
    }



    useEffect(() => {
        const fetchData = async () => {
            // setisLoading(true)

            dispatch({ type: "SET_LOADING" })
            const response = await axios.get(`${API}query=${state.query}&page=${state.page}`)
            // setisLoading(false)
            dispatch({
                type: "GET_STORIES", payload: {
                    hits: response.data.hits,
                    nbPages: response.data.nbPages,

                }
            })
        }
        fetchData()
    }, [state.query, state.page])
    return (

        <AppContext.Provider value={{ ...state, searchPost, getPrevPage, getNextPage }}>

            {children}
        </AppContext.Provider>
    )
}

export { AppProvider };



export const useMyContext = () => {
    const context = useContext(AppContext)
    return context;
}