import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchQuoteAsync, 
    selectQuote
} from './QuoteSlice';
import './Quote.css'

const Quote = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);
    // const quoteStream = useSelector(selectQuoteStream)

    // data from SSE
    const [listening, setListening] = useState(false);
    const [quoteStream, setQuoteStream] = useState([]);
    let eventSource = undefined;
    // useEffect(() => {
    //     if (!listening) {
    //         eventSource = new EventSource("http://localhost:8080/quotes/feed");
    //         eventSource.onmessage = (event) => {
    //             const newQuote = JSON.parse(event.data);
    //             console.log("event.data", newQuote);
    //             setQuoteStream(arr => {
    //                 const newQuoteStream = [...arr, newQuote];
    //                 if (newQuoteStream.length > 10) {
    //                     newQuoteStream.shift();
    //                 }
    //                 return newQuoteStream;
    //             });
    //         }
    //         eventSource.onerror = (err) => {
    //             console.error("EventSource failed:", err);
    //             eventSource.close();
    //         }
    //         setListening(true)
    //     }
    //     return () => {
    //             eventSource.close();
    //             console.log("event closed");
    //     }
    // }, [])

    const startQuoteStream = (eventSource) => {
        console.log('start quote stream...');
        eventSource = new EventSource("http://localhost:8080/quotes/feed");
        if (!listening) {
            eventSource.onmessage = (event) => {
                const newQuote = JSON.parse(event.data);
                // console.log("event.data", newQuote);
                setQuoteStream(arr => {
                    const newQuoteStream = [...arr, newQuote];
                    if (newQuoteStream.length > 10) {
                        newQuoteStream.shift();
                    }
                    return newQuoteStream;
                });
            }
            eventSource.onerror = (err) => {
                console.error("EventSource failed:", err);
                eventSource.close();
            }
            setListening(true)
        } else {
            eventSource.close();
        }
    }

    const stopQuoteStream = (eventSource) => {
        console.log('stop Quote stream...');
        eventSource.close();
        console.log("event closed");
        setListening(false);
    }

    return (
        <div>
            <div>stock quotes</div>  
            <button onClick={() => dispatch(fetchQuoteAsync())}>get remote text async</button>   
            <div>
            {
                quote.map(item => <div>{item}</div>)
            }
            </div>  

            <hr/>
            
            <div><button onClick={() => startQuoteStream(eventSource)}>Start Quote Stream</button></div>
            <div><button onClick={() => stopQuoteStream(eventSource)}>Stop Quote Stream</button></div>
            <div>
            {
                quoteStream.map( item =>
                        <div key="{item.ticker}{item.instant}"><b>Symbol: </b><span>{item.ticker} </span>
                        <b>Price: </b><span>{item.price} </span>
                        <b>Time: </b><span>{item.instant} </span></div>
                )
            }
            </div>
        </div>
    )
    
}

export default Quote