import React, { Component } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import 'whatwg-fetch'

import UserItem from './UserItem'

export default class User extends Component {
  constructor(props){
    super(props);
      this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('http://0.0.0.0:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'X-Lian-H': 'api_test'
      }
    })
    .then(response=>{
      return response.json()
    })
    .then(json=>{
      this.setState({users: json})
    })
    .catch(ex=>{
      console.log('parsing failed', ex)
    })
  }

  render(){
    const { users } = this.state
    const userItems = users.map((props,index)=> <UserItem key={index} {...props}/>)
    return (
      <section>
        <Grid>
          <Row>
            <Col sm={10} md={11} className="item-m">
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {userItems}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}