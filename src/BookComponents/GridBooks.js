import BookCard from "./BookCard"; 
import React, { useState } from 'react';
import data from "../BooksAssets/BookInfo.json";

function GridBooks() {
    const [bookIndices, setBookIndices] = useState(Array.from({ length: 18 }, (_, index) => index + 1));

    function Sort() {
        if (document.getElementById('option1').checked) {
            let indexArray = Array.from({ length: parseInt(Object.keys(data).length - 1) }, (_, index) => index + 1);
            setBookIndices(indexArray);
        } else if (document.getElementById('option2').checked) {
            let indexArray = Object.keys(data)
            .filter(index => data[index].series === "Harry Potter")
            .map(index => parseInt(index));
            setBookIndices(indexArray);
        } else {
            let indexArray = Object.keys(data)
            .filter(index => data[index].series === "The Chronicles of Narnia")
            .map(index => parseInt(index));
            setBookIndices(indexArray);
        }
    }
    

    return (
        <>
            <div className="SortingOptions">
                <div>
                    <input type="radio" id="option1" name="options" value="option1" defaultChecked />
                    <label htmlFor="option1">All</label>
                </div>

                <div>
                    <input type="radio" id="option2" name="options" value="option2" />
                    <label htmlFor="option2">Harry Potter Series</label>
                </div>

                <div>
                    <input type="radio" id="option3" name="options" value="option3" />
                    <label htmlFor="option3">The Chronicles of Narnia</label>
                </div>

                <button type="button" onClick={Sort}>Sort</button>
            </div>

            <div className="GridBooks" id="GridBooks">
                {bookIndices.map((bookIndex) => (
                    <BookCard key={bookIndex} bookIndex={bookIndex} />
                ))}
            </div>
        </>
    );
}

export default GridBooks;
