import React from 'react';
import {useRouter} from 'next/router'
import ReactDom from 'react-dom';

let parse = require('html-react-parser')

/**
 * Form that takes in tutor email and returns students under them
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form() {

    const router = useRouter()
    const registeredStudents = async (event) => {
        event.preventDefault()
        // post request to API to get student list
        let res = await fetch('http://localhost:3000/api/getcommonsstudents', {
            body: JSON.stringify({
                tutor: event.target.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
        let students = result["values"]["students"]
        // if the API call returns students, populate table else show error message
        if (res.ok && students) {
            let table = await updateTable(event.target.name.value, students)
            ReactDom.render(table, document.getElementById("table"));
        }
        else{
            let noStudents = await noStudents(event.target.name.value)
            ReactDom.render(noStudents, document.getElementById("table"));
        }
    }

    /**
     * Method to create a no students error message
     * @param tutor
     * @returns {Promise<JSX.Element>}
     */
    let noStudents = async (tutor) => {
        return(
            <h1>No students under {tutor}</h1>
        )
    }

    /**
     * Method to create a table and populate it with student emails.
     * @param tutor
     * @param students
     * @returns {Promise<JSX.Element>}
     */
    let updateTable = async (tutor, students) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>Students Registered Under {tutor}</th>
                </tr>
                </thead>
                <tbody>
                {students.map((stud) => (
                    <tr>
                        <td>{stud}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

    // default form element with empty table div to populate later
    return (
        <div>

            <form onSubmit={registeredStudents}>
                <label htmlFor="name">Tutor Email</label>
                <input id="name" name="name" type="email" autoComplete="name" required multiple/>
                <div>
                    <button type="submit">Find registered students</button>
                </div>
            </form>
            <div id="table">

            </div>
        </div>
    )
}