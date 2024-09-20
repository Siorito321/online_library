import { useParams } from 'react-router-dom';
import data from "../BooksAssets/BookInfo.json";

function BookPage() {

    const { book_number } = useParams();
    let bookNumber;
    let bookInfo;
    try {
        bookNumber = parseInt(book_number);
        if (isNaN(bookNumber) || bookNumber > Object.keys(data).length || bookNumber < 1) {
            throw new Error();
        }
        bookInfo = data[bookNumber.toString()]; // Assign bookInfo inside the try block
    } catch (e) {
        return (<p>Incorrect URL</p>);
    }
    let BookCover;
    try {
        BookCover = require(`../BooksAssets/Covers/${book_number}.jpg`);
    } catch (error) {
        // Handle error if the image file doesn't exist
        // You can return a default image or display an error message
        BookCover = ""; // For example, set an empty string
    }
    return (
        <>
            <div className='bookPage'>
                <img className="CoverImg" src={BookCover} alt="Book Cover" />
                <div>
                    <h3 className="BookName">{bookInfo.name}</h3>
                    <p>Author: {bookInfo.author}</p>
                    <p>Series: {bookInfo.series}</p>
                    <p>Available for download: {bookInfo.available ? "yes😃" : "no🥲"}</p>
                    <p>{bookInfo.description}</p>
                    <br/>
                    <form action="/submit_email" className='form-style'>
                        <p><b>Interested in "{bookInfo.name}"?</b></p>
                        <label htmlFor="email">Leave your email so we can send you the book!:</label><br />
                        <input type="email" id="email" name="email" required /><br />
                        <input type="submit" value="Send me the book!" />
                    </form>
                </div>
            </div>

            <div className='bookForm'>
            </div>
        </>
    );
}

export default BookPage;