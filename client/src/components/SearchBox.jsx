import React, { useState } from 'react'
import { Input } from './ui/input'
import { useNavigate } from 'react-router-dom'
import { RouteSearch } from '@/helpers/RouteName'

const SearchBox = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()
    const getInput = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(RouteSearch(query))
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input 
                name="q" 
                onInput={getInput} 
                placeholder="Search here..." 
                className="h-9 rounded-full bg-background border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary" 
            />
        </form>
    )
}

export default SearchBox