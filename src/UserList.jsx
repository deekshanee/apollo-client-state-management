import React, { Component } from 'react'
import Users from './Users'
import { withRouter } from "react-router-dom";
import {Redirect} from 'react-router-dom'


 class UserList extends Component {

 
    render(){
        const { history } = this.props;
        return <div>
            <center><h1>Welcome to User Portal</h1></center>
            User List 1<Users></Users>
            <br/>
            User List 2<Users></Users>
            <br/>
            User List 3<Users></Users>
            <br/>
            User List 4 <Users></Users>

            <button onClick={() => history.push("/power")}>click</button>
        </div>
}
}

export default withRouter(UserList);




