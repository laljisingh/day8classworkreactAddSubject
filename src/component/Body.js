import "./body.css"
import { useState } from "react";
function Body() {
    const [subjects, setSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState('');
    const [newHours, setNewHours] = useState('');

    const savedSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
    if (savedSubjects.length > 0 && subjects.length === 0) {
        setSubjects(savedSubjects);
    }

    function addSubjects() {
        if (newSubject && newHours) {
            const updatedSubjects = [...subjects, { subject: newSubject, hours: parseInt(newHours) }];
            setSubjects(updatedSubjects);
            setNewSubject('');
            setNewHours('');

            localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
        }
    }
    function increase(idx) {
        const updatedSubjects = [...subjects];
        updatedSubjects[idx].hours += 1;
        setSubjects(updatedSubjects);


        localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
    function decrease(idx) {
        const updatedSubjects = [...subjects];
        if (updatedSubjects[idx].hours > 0) {
            updatedSubjects[idx].hours -= 1;
            setSubjects(updatedSubjects);

            localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
        }
    }



    return (
        <>
            <a href="#" id="head" className="block p-6 bg-yellow-50 border border-gray-200 rounded-lg shadow hover:bg-green-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <form>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Subject name</label>
                        <input type="input" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your subjct here"
                            value={newSubject}
                            onChange={(e) => setNewSubject(e.target.value)}

                            required />
                    </div>

                    <div className="mb-6">
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter hours</label>
                        <input type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter hours"
                            newHours onChange={(e) => setNewHours(e.target.value)}
                            required />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={addSubjects}
                    >Add Subject</button>
                </form>
            </a>

            {/* table  input*/}


            <div id="table" className="relative overflow-x-auto shadow-md mt-5 sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-red-500 dark:bg-red-500 dark:text-white-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Subject name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hours
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time Up
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time Down
                            </th>
                        </tr>
                    </thead>
                    {
                        subjects.map((ele, idx) => (
                            // console.log(ele.subject+" "+ele.hours)
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-100 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele.subject}
                                    </th>
                                    <td class="px-6 py-4">
                                        {ele.hours}
                                    </td>
                                    <td class="px-4 py-4">
                                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            onClick={() => increase(idx)}
                                        >
                                            <b style={{ fontSize: "25px" }}>+</b></button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={() => decrease(idx)}
                                        ><b style={{ fontSize: "25px" }}>-</b></button>
                                    </td>

                                </tr>

                            </tbody>
                        ))
                    }

                    {/* <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-100 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>+</b></button>
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><b>-</b></button>
                            </td>

                        </tr>

                    </tbody> */}


                </table>
            </div>

        </>
    )
}
export default Body;