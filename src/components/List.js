import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        "id": uuidv4(),
        "title": "call father",
        "desc": "this is desc2"

    },
    {
        "id": uuidv4(),
        "title": "call mother",
        "desc": "this is desc3"

    },
    {
        "id": uuidv4(),
        "title": "call wife",
        "desc": "this is desc4"

    }
];


const List = () => {
    return <div>
        {todos.map((todo) => {
            const {id, title, desc} = todo
            return <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        })}
    </div>
};
export default List;