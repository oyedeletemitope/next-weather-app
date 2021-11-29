import Head from 'next/head'
import SearchBox from '../components/SearchBox'

export default function Home({placeholder}) {
  return (
   <div> 
    <head>
      <title>weather app</title>
    </head>

    <div className="home">

      <div className="container">
        <h1><center>weather forecast app</center></h1>
        <SearchBox placeholder="search for a city" />
      </div>
    </div>


   </div>
  )
}


