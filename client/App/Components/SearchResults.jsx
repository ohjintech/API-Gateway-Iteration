import React from 'react';
import Container from '@material-ui/core/Container';

class SearchResults extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        console.log("props", this.props)

        return(
            <div style = {{padding: '1em', margin: '1em', borderStyle: 'solid', border: 2, backgroundColor: '#fffeed', boxShadow: '1px 1px 1px 1px', borderRadius: '0.5em'}}>
                <div><strong>Book Title: </strong>{this.props.books.title}</div>
                <div><strong>Author: </strong>{this.props.books.author}</div>
                <div style = {{wordWrap: 'break-word'}}><strong>API: </strong>{this.props.books.selfLink}</div>
            </div>
        )
    }
}

export default SearchResults

