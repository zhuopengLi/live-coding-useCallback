import React, { useEffect, useState, useCallback } from 'react'

export default function App() {
    const [data, setData] = useState('')

    const fetchData = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(json => setData(json))
    }, [setData])
    // As we used setData inside useCallback, it needs to be added in the deps

    useEffect(() => {
        fetchData()
    }, [fetchData])
    // When pass Arrays, Objects or Functions as dependencies, attention should be drawn
    //
    // Generally, when pass in the function outsides of the useEffect, we should wrap it
    // with the useCallback first

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])
    // Here we are taking data(object) as dependency, but we don't have to wrap it with other hooks.
    //
    // Reason:
    // The first useEffect gets triggered, and runs fetchData, and it run only once as the
    // dependency won't change in the future (we fixed it with useCallback).
    // 
    // The data is set in the first useEffect, only once. And there is no other thing can cause 
    // the change of the dependency.

    return <div className='App'>{data.title}</div>
}
