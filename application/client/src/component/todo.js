import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Table } from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getTodos, deleteTodo, addTodo } from '../actions/todoActions'

class Todo extends Component {

    componentDidMount(){
        this.props.getTodos()
    }

    render() { <div>Online Course Registration
     <button>Start learning</button>
      <div>
        <h3>About</h3>
          <p>"We are India's largest learning platform"</p>
          <p>Classroom education in India has stifled many brilliant minds. With Course Aacademy, India's largest education platform, we are changing that
          In a span of 6 months, over 300,000 students have benefited from over 2,400 online lessons and specialised courses on cracking various competitive
          examinations, on our platform.We have on board some of the top educators in the country, including Kiran Bedi, India's first woman IPS officer and now the Governor of Pondicherry.
          With over 2 million views every month, we are touching the lives of people in the remotest corners of the country. Our success stories include thousands of students who have cracked
          toughest of examinations, improved their ability to speak and write better and increase their knowledge. Our vision is to partner with the brightest minds and have courses on every possible topic in multiple languages
          so the whole world can benefit from these courses. India is home to 19% of the world's youth and we are empowering them to take on the world in a manner that classrooms will never do</p>
        </div>
        <div>
          <h4>Daily live classes</h4>
          <p>Chat with educators, ask questions,answer live polls, and get your doubts cleared-all while the class is going on</p>
      </div>
      <div>
          <h4>Practice and revise</h4>
          <p>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
        </div>
          
           <div>
          <h4>Learn anytime, anywhere</h4>
          <p>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
          </div>
        <div>
          <h3>Contact</h3>
          <p>Course Academy Private Limited Ground Floor,</p>
          <p>Wajeda House, Gulmohar Cross Road No. 7,</p>
          <p> Juhu Scheme, Mumbai, Maharashtra - 400049</p>
    </div>
       
    </div>

        const { todos } = this.props.todo
    
        const handleAddTodo = (e) => {
            const todo = prompt('Enter todo here', '');

            const newTodo = {
                name : todo
            }

            this.props.addTodo(newTodo);
        }

        const handleDelete = id => {
            this.props.deleteTodo(id)
        }

        return ( 
            <div style={{
                margin : '10px',
                border : '2px solid #ec'
            }}>

                <Button variant="primary" style={{
                    margin : '10px'
                }} onClick={handleAddTodo}>Add todo</Button>

                <Table hover responsive striped bordered>
                
                <tbody>
                 {todos.map((todo) => {
                     return(
                         <tr key={todo._id}>
                            <td>{todo.name}</td>
                            <td><Button variant="dark" onClick={
                                () => handleDelete(todo._id)
                            }>Delete</Button></td>
                        </tr>
                     )
                 })}
                 </tbody>
                </Table>

            </div>
         );
    }
}
 
Todo.propTypes = {
    getTodos : PropTypes.func.isRequired,
    todo : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo : state.todo
})

export default connect(mapStateToProps, { getTodos, deleteTodo, addTodo })(Todo);