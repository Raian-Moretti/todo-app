import React from 'react';
import { connect } from 'react-redux'; // ONLY REQUIRED TO USE REDUX
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';
import { markAsDone, markAsPending, remove } from './todoActions';

const  TodoList = props => { // ONLY REQUIRED TO USE REDUX
// export default props => { // WITHOUT REDUX
    const renderRows = () => {
        const list = props.list || []
     return list.map(todo => (
         <tr key={todo._id}>
             <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
             <td>
                <IconButton style='success' icon='check' hide={todo.done}
                    onClick={() => props.markAsDone(todo)} ></IconButton>
                <IconButton style='warning' icon='undo' hide={!todo.done}
                    onClick={() => props.markAsPending(todo)} ></IconButton>
                <IconButton style='danger' icon='trash-o' hide={!todo.done}
                    onClick={() => props.remove(todo)} ></IconButton>
             </td>
         </tr>
     ))
    }
    return (

        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

// DESIGN PATTERN: DECORATOR
// ONLY REQUIRED TO USE REDUX
const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// ONLY REQUIRED TO USE REDUX