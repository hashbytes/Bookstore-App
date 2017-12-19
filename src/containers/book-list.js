import React, { Component } from 'react';
import { connect } from  'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList  extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // Whatever is returned will show up as props
    // for this(check line 30) component.
    return {
        books: state.books
    }
}

// Anything returned from this function will end up
// as props on this container.
const mapDispatchToProps = (dispatch, ownProps) => {
    // whenever selectBook is called, result should be passed
    // to all of our reducers.
    return bindActionCreators({ selectBook }, dispatch)
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)