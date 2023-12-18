import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Components/Form';
import axios from 'axios';

function Home() {
    const [books, setBooks] = useState([]);
    const [search, UpdateSearch] = useState('');

    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: {
                'Authorization': 'whatever-you-want'
            }
        })
            .then(response => {
                setBooks(response.data.books);
                console.log(books);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function handelInput(e) {
        UpdateSearch(e.target.value);
    }

    return (
        <>
            <div className='top'>
                <h1> Kalvium Books </h1>
                <div className='searchN'>
                    <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-line-icon-icon-24.png" alt="" className='simg' />
                    <input type="Search" className='inp' onChange={handelInput} placeholder='Search Book'/>
                </div>
                <Link to="/Form"> <button className='register'> Register </button> </Link>
            </div>
            <div className='content'>
                {
                    books
                        .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
                        .map((book) => {
                            return (
                                <div key={book.id} className='books'>
                                    <img src={book.imageLinks.thumbnail} alt="Book cover" />
                                    <div className='bookI'>
                                        <p className='title'><b> {book.title} </b></p>
                                        <p className='rating'> {book.averageRating} ⭐ Free</p>
                                        <p className='pages'> {book.pageCount} Pages </p>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
        </>
    );
}

export default Home;
