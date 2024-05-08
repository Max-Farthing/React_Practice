import { Link } from "react-router-dom";

const EVENTS = [
    {id: "e1", title: 'Event 1'},
    {id: "e2", title: 'Event 2'},
    {id: "e3", title: 'Event 3'},
]

export default function EventsPage() {

    return (
        <>
            <h1>
                <ul>
                    {EVENTS.map(item => 
                        <li key={item.id}><Link to={`/events/${item.id}`}>{item.title}</Link></li>
                    )}
                </ul>
            </h1>
        </>
    );
}