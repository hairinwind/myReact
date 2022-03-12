import axios from 'axios';

export function fetchQuote() {
    // return a promise
    return axios.get("http://localhost:8080/quotes"); // start spring boot app trading-service-webflux
}

export function fetchQuoteStream() {
    return axios.get("http://localhost:8080/quotes/feed");
}