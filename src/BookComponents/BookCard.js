import data from "../BooksAssets/BookInfo.json";

function BookCard(props) {

    let bookInfo = data[props.bookIndex.toString()];
    let BookCover = require(`../BooksAssets/Covers/${props.bookIndex}.jpg`);

    let bookUrl = "/books/" + props.bookIndex.toString();
    return (
        <>
            <div className='bookCard'>
                <a href={bookUrl}>
                    <img className="CardImg" src={BookCover} alt="Book Cover" />
                    <h3 className="cardName">{bookInfo.name}</h3>
                    <p>Author: {bookInfo.author}</p>
                </a>
            </div>
        </>
    );
}

export default BookCard;
