import React from 'react'
import { Form, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useUserContext } from '../utils/contexts/UserContext';

const NewTicket = () => {
    const navigation = useNavigation();
    const user = useUserContext();
    console.log(new Date().toISOString());

  return (
    <div className='w-full mb-4 mt-8 border-t bg-gray-50'>
        <div className='p-2'>
            <Form method='post'>
                <div className='grid grid-cols-3 gap-4'>
                    <section>
                        <h4 className='underline font-semibold text-2xl'>General Info</h4>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="openedBy">Opened By:</label>
                            <input className='standard-input' readOnly type='text' name='openedBy' value={user} />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="closedBy">Closed By:</label>
                            <input className='standard-input' type='text' name='closedBy' placeholder='staff name' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="clientAffected">Client Affected:</label>
                            <input className='standard-input' type='text' name='clientAffected' placeholder='Client Name here' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="impacting">Service Impacting?</label>
                            <input className='standard-input' type='text' name='impacting' placeholder='YES' />
                        </div>
                    </section>
                    <section>
                        <h4 className='underline font-semibold text-2xl'>Outage Info</h4>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="outageType">Outage Type:</label>
                            <input className='standard-input' type='text' name='outageType' placeholder='ON-NET' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="password">Cause:</label>
                            <input className='standard-input' type='text' name='cause' placeholder='Root cause of outage' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="openedAt">Opened At:</label>
                            <input className='standard-input' type='datetime-local' defaultValue={new Date().toISOString().substring(0, 16)} name='openedAt' />
                        </div>
                        <div className='input-group mb-4'>
                            <label className='standard-label' htmlFor="closedAt">Closed At:</label>
                            <input className='standard-input' type='datetime-local' name='closedAt' />
                        </div>
                    </section>
                    <section>
                        <h4 className='underline font-semibold text-2xl'>Outage Updates</h4>
                        
                    </section>
                </div>
                <div className='flex'>
                    <button type="submit" className='standard-btn w-1/4 mx-auto justify-center mt-4 mb-2'>
                        {/* <HashLoader color='white' size={25} className='mr-3' /> */}
                        {navigation.state == "submitting" && <HashLoader color='white' size={25} className='mr-3' />}
                        {navigation.state == "submitting" ? "Submitting" : "Create Ticket"}
                    </button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default NewTicket;