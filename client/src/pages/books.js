import React, { Component } from "react";
import { Container } from "../components/Grid/index";
import Nav from "../components/Navs/Navs";
import Jumbotron from "../components/Jumbotron/index";
import { Input, SubmitBtn } from "../components/Search/search";
import API from "../utils/API";
import List from "../components/List/list";

class Home extends Component {
    state = {
        books: [],
        search: ""
    };
    // search for books through googe API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                // console.log(res.data.items)
                this.setState({
                    books: res.data.items,
                    search: ""
                })
            })
            .catch(err => console.log(err))
    };

    // handle input data
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchBooks();
    }

    saveGoogleBook = (book) => {
        API.saveBook({
            id: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        })
            .then(res => console.log("Saved to DB.", res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <form>
                        <h5>Search for books</h5>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="e.g. Harry Potter"
                        />
                        <SubmitBtn onClick={this.handleFormSubmit} />
                    </form>

                    {this.state.books.length ? (
                        <List
                            bookState={this.state.books}
                            saveGoogleBook={this.saveGoogleBook}>
                        </List>
                    ) : (
                            <div>
                                <hr />
                                <p style={{ fontStyle: "italic" }}>No results to display</p>
                            </div>
                        )}
                </Container>
            </div>
        )
    }
}

export default Home;
