import React, { useState } from 'react'
import { Form, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useUserContext } from '../utils/contexts/UserContext';
import { FaTrash } from "react-icons/fa";

const NewTicket = () => {
    const navigation = useNavigation();
    const {name} = useUserContext();
    const [closeDateSet, setcloseDateSet] = useState(false);
    const [updates, setUpdates] = useState([
        {date: "", action: "Called customer premises"}
    ]);
    const updateElements = updates.map(update => {
        return (
            <div className='w-full flex gap-1 bg-stone-300 p-1 rounded-md shadow-md'>
                <div className='w-3/4'>
                    Date: <input className='ml-2 mb-1 bg-gray-50' type="datetime-local" value={update.date} required /> <br />
                    Action: <input className='ml-2 w-64' required type="text" value={update.action} />
                </div>
                <div className='w-1/4 flex justify-center items-center'>
                    <button className='bg-yellow-500 hover:bg-yellow-300 hover:text-red-800 p-2 text-xl rounded-md'>
                        <FaTrash className='text-red-700' />
                    </button>
                </div>
            </div>
        )
    });

    const handleCloseDate = (Event) => {
        if (Event.target.value === "") {
            setcloseDateSet(false);
        } else {
            setcloseDateSet(true);
        }
    }

    const handleFormSubmit = (Event) => {
    }


  return (
    <div className='w-full mb-4 mt-8 border-t bg-gray-50'>
        <div className='p-2'>
            <Form method='post' onSubmit={handleFormSubmit}>
                <div className='grid grid-cols-3 gap-4'>
                    <section>
                        <h4 className='underline font-semibold text-2xl'>General Info</h4>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="openedBy">Opened By:</label>
                            <input className='standard-input' readOnly type='text' name='openedBy' value={name} />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="clientAffected">Client Affected:</label>
                            <input className='standard-input' type='text' name='clientAffected' placeholder='Client Name here' required />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="password">Cause:</label>
                            <textarea rows={6} className='standard-input' type='text' name='cause' placeholder='Root cause of outage' required />
                        </div>
                    </section>
                    <section>
                        <h4 className='underline font-semibold text-2xl'>Outage Info</h4>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="outageType">Outage Type:</label>
                            <input className='standard-input' type='text' name='outageType' placeholder='ON-NET' required />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="impacting">Service Impacting?</label>
                            <input className='standard-input' type='text' name='impacting' placeholder='YES' required />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="openedAt">Opened At:</label>
                            <input className='standard-input' type='datetime-local' required defaultValue={new Date().toISOString().substring(0, 16)} name='openedAt' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="closedAt">Closed At:</label>
                            <input onChange={handleCloseDate} className='standard-input' type='datetime-local' name='closedAt' />
                        </div>
                    </section>
                    <section>
                        <h4 className='underline font-semibold text-2xl mb-2'>Outage Updates</h4>
                        
                        <div className='border max-h-80 p-1'>
                            {updateElements}
                        </div>
                        <button className='standard-btn text-sm float-end mt-2'>Add new update</button>
                    </section>
                </div>
                <div className='flex gap-2'>
                    <button type='submit' onClick={handleFormSubmit} className={`${closeDateSet ? 'pointer-events-none bg-blue-400' : ''} newTicket standard-btn w-1/4 justify-center mt-4 mb-2`}>
                        {navigation.state == "submitting" && <HashLoader color='white' size={25} className='mr-3' />}
                        {navigation.state == "submitting" ? "Submitting" : "Create Ticket"}
                    </button>

                    <button type='submit' onClick={handleFormSubmit} className={`${!closeDateSet ? 'pointer-events-none bg-green-400' : ''} oldTicket standard-btn-green w-1/4 justify-center mt-4 mb-2`}>
                        {navigation.state == "submitting" && <HashLoader color='white' size={25} className='mr-3' />}
                        {navigation.state == "submitting" ? "Closing Ticket" : "Close Ticket"}
                    </button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default NewTicket;