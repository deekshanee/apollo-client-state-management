// functional component will return all the users
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {Link} from 'react-router-dom'
// write the query to get all the users from graphql
// do some kind of mutation here if needed
// do all the imports from gql needed
import { cache, client } from './client';

export const FETCH_CACHE_STEP = gql`{
step @client
}`
const updateCounter = async ()=>{
    ;
    const data = await client.readQuery({
        query:FETCH_CACHE_STEP
    });
    console.log(data);
    client.writeQuery({
        query:FETCH_CACHE_STEP,
        data:{ step:(data.step+1)}
     });
     const data1 = await client.readQuery({
        query:FETCH_CACHE_STEP
    });
    console.log(data1);
}
const renderStoreUsers = ({ data, loading, error }) => {
    if (error) return <p>Error while loading users</p>;
    if (loading) return <p>Please wait while loding users</p>
    console.log(data);
   
    //prepare table and return to ui
return (
<div>
<p>Ohh Store Value is from store is Step:{data.step}</p>
<Link to="/again" >Show the power again</Link>
<button onClick={(e)=>{e.preventDefault();updateCounter()}}>CLick</button>
</div>
);
    




}
export default function Power() {
    return (
        <Query query={FETCH_CACHE_STEP}>
           
            {renderStoreUsers}
        </Query>

    )
}
