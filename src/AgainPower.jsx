// functional component will return all the users
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {Link} from 'react-router-dom'
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
return <p>Ohh Store Value is from stoe is Step:{data.step}
<Link to="/review" >one more time please</Link>
</p>



}
export default function AgainPower() {
    return (
        <Query query={FETCH_CACHE_STEP}>
           
            {renderStoreUsers}
        </Query>

    )
}
