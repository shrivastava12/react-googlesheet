
import { Button, Form, Container, Header } from 'semantic-ui-react';
import './App.css';
import { Component } from 'react';
import Axios from 'axios';

export default class App extends Component{
  
  constructor(props){
      super(props)

      this.state = {
        name:'',
        age:'',
        salary:'',
        hobby:''
      }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post('https://sheet.best/api/sheets/8a4795f0-854e-47b4-b869-59f3badcc1d5',this.state).then((response) => {
      console.log(response);
    })


    
  }
  
  render(){

    const {name,age,salary,hobby} =  this.state;

    return(

      <Container fluid className="container">
      <Header as='h2'>React Google Sheets!</Header>
      <Form className="form" onSubmit={this.submitHandler} >
        <Form.Field>
          <label>Name</label>
          <input type="text" placeholder='Enter your name'  name="name" value={name} onChange={this.changeHandler}  />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="number" placeholder='Enter your age' name="age" value={age} onChange={this.changeHandler} />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input type="number" placeholder='Enter your salary' name="salary" value={salary} onChange={this.changeHandler} />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input type="text" placeholder='Enter your hobby' name="hobby" value={hobby} onChange={this.changeHandler}  />
        </Form.Field>
        
        <Button color="blue" type='submit'>Submit</Button>
      </Form>
    </Container>

    )
  }
}
