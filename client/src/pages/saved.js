import React, { Component } from 'react'
import { Container } from "../components/Grid/index";
import Nav from "../components/Navs/Navs";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
import SavedList from "../components/SavedList/savedList";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            this.getBooks();
        })
        .catch(err => console.log(err));
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                        bookState={this.state.savedBooks}
                        deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved