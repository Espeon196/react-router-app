import React from "react";
import {
    Link,
    useLocation, 
    Outlet 
} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="events">Events </Link>
                <Link to="products">Products </Link>
                <Link to="contact">Contact Us </Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
            <nav>
                <Link to="services">Services</Link>
                <Link to="history">History</Link>
                <Link to="location">Location</Link>
            </nav>
        </div>
    );
}

export function Services() {
    return (
        <section>
            <h2>Our Services</h2>
            <p>
                XXX
            </p>
        </section>
    );
}

export function History() {
    return (
        <section>
            <h2>Our History</h2>
            <p>
                YYY
            </p>
        </section>
    );
}

export function Location() {
    return (
        <section>
            <h2>Our Location</h2>
            <p>
                ZZZ
            </p>
        </section>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>
                Resource not found at {location.pathname}
            </h1>
        </div>
    );
}