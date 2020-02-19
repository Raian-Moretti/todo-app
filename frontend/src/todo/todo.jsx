import React /*, { Component }*/ from 'react'; //REMOVED TO USE A FUNCTIONAL COMPONENT
// import axios from 'axios'; //WITHOUT REDUX
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

// FUNCTIONAL COMPONENT
export default props => (
    <div>
        <PageHeader name='Tasks' small='Register'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
// const URL = 'http://localhost:3001/api/todos'; // WITHOUT REDUX

//REMOVED TO USE A FUNCTIONAL COMPONENT
// export default class Todo extends Component {
    // WITHOUT REDUX
    // constructor(props) {
    //     super(props);

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleAdd = this.handleAdd.bind(this);
    //     this.handleSearch = this.handleSearch.bind(this);
    //     this.handleClear = this.handleClear.bind(this);
        
    //     this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    //     this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    //     this.handleRemove = this.handleRemove.bind(this);

    //     this.state = { description: '', list: [] };
        
    //     this.refresh();
    // }

    // refresh(description = '') {
    //     const search = description ? `&description__regex=/${description}/` : ''
    //     axios.get(`${URL}?sort=-createdAt${search}`)
    //         .then(resp => this.setState({...this.state, description ,list: resp.data}));
    // }
    
    // handleChange(e) {
    //     this.setState({...this.state, description: e.target.value});
    // }

    // handleAdd() {
    //     const description = this.state.description
    //     axios.post(URL, { description } )
    //     .then(resp => this.refresh());
    // }
    
    // handleSearch() {
    //     this.refresh(this.state.description);
    // }

    // handleClear() {
    //     this.refresh();
    // }

    // handleRemove(todo) {
    //     axios.delete(`${URL}/${todo._id}`)
    //         .then(resp => this.refresh(this.state.description));
    // }

    // handleMarkAsDone(todo) {
    //     axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    //         .then(resp => this.refresh(this.state.description));
    // }

    // handleMarkAsPending(todo) {
    //     axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
    //          .then(resp => this.refresh(this.state.description));
    // }

    // render() {
    //     return (
    //         <div>
    //             <PageHeader name='Tasks' small='Register'></PageHeader>
    //             <TodoForm 
                    // WITHOUT REDUX
                    // description={this.state.description} 
                    // handleChange={this.handleChange}
                    // handleAdd={this.handleAdd} 
                    // handleSearch={this.handleSearch}
                    // handleClear={this.handleClear} 
                // />
                // <TodoList 
                    // WITHOUT REDUX
                    // list={this.state.list} 
                    // handleMarkAsDone={this.handleMarkAsDone}
                    // handleMarkAsPending={this.handleMarkAsPending}
                    // handleRemove={this.handleRemove} 
    //             />
    //         </div>
    //     )
    // }
// }