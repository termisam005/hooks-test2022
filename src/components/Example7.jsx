import { useState } from "react";


function sum(persons) {
    return persons.map(person => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {

    const [value, setValue] = useState('');

    const [persons] = useState([
        { name: 'Mark', age: '39' },
        { name: 'Hanna', age: '28' }
    ]);

    const count = sum(persons);

    return (
        <div>
            <input type="text" value={value} onChange={change} />
            <p>{count}</p>
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }

}
