import React, { Component } from 'react';
import { connect } from 'react-redux'; // ONLY REQUIRED TO USE REDUX
import { bindActionCreators } from 'redux'; // ONLY REQUIRED TO USE REDUX

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { add, changeDescription, search, clear } from './todoActions'; // ONLY REQUIRED TO USE REDUX

// TO ComponentWillMount WORKS WE NEED TO INSERT IT IN A CLASS, BECAUSE IT DOESN'T WORK IN FUNCTIONAL METHODS 

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear} = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description, clear} = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' 
                    placeholder='Add a task'
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='success' icon='plus'
                    onClick={() => add(description)} ></IconButton>
                    <IconButton style='primary' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style='danger' icon='remove'
                        onClick={() => clear()}></IconButton>
                </Grid>
            </div>
        )
    }
}

// CHANGING TO CLASS BECAUSE ComponentWillMount DOESN'T WORK IN FUNCTIONAL METHODS  ( ↑↑↑↑↑↑↑↑ )
// const TodoForm = props => { /* WITH REDUX */ 
// export default props => { /* WITHOUT REDUX */
    // const keyHandler = (e) => {
        // if(e.key === 'Enter') {
        //     e.shiftKey ? props.handleSearch() : props.handleAdd();
        // } else if (e.key === 'Escape') {
        //     props.handleClear();
        // }
    // }

// DESIGN PATTERN: DECORATOR
// ONLY REQUIRED TO USE REDUX
const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
// ONLY REQUIRED TO USE REDUX