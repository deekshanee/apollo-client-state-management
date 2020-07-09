// functional component will return all the users
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {client} from './client';
// write the query to get all the users from graphql
// do some kind of mutation here if needed
// do all the imports from gql needed

export const FETCH_REMOTE_USERS = gql`{
getUsers{
        name,
        email,
        address{
            city
            country  
        },
        time
    }}`

const renderAllUsers = ({ data, loading, error }) => {
    if (error) return <p>Error while loading users</p>;
    if (loading) return <p>Please wait while loding users</p>
    console.log(data);
    //prepare table and return to ui
    return (
        <table border="1">
            <tbody>
                {data.getUsers.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                       <td>{user.time}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );



}
export default function Users() {
    return (
        <Query query={FETCH_REMOTE_USERS}>
            {renderAllUsers}
        </Query>

    )
}
