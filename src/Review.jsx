// functional component will return all the users
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// write the query to get all the users from graphql
// do some kind of mutation here if needed
// do all the imports from gql needed


export const FETCH_CACHE_STEP = gql`{
step @client
}`

const renderStoreUsers = ({ data, loading, error }) => {
    if (error) return <p>Error while loading users</p>;
    if (loading) return <p>Please wait while loding users</p>
    console.log(data);
   
    //prepare table and return to ui
return <p>Review:{data.step}</p>



}
export default function Review() {
    return (
        <Query query={FETCH_CACHE_STEP}>
           
            {renderStoreUsers}
        </Query>

    )
}
