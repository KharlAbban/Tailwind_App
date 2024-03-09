import React from 'react'
import { Form, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useUserContext } from '../utils/contexts/UserContext';

const NewTicket = () => {
    const navigation = useNavigation();
    const {name} = useUserContext();
    

  return (
    <div className='w-full mb-4 mt-8 border-t bg-gray-50'>
        <div className='p-2'>
            <Form method='post'>
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
                            <input className='standard-input' type='datetime-local' name='closedAt' />
                        </div>
                    </section>
                    <section>
                        <h4 className='underline font-semibold text-2xl mb-2'>Outage Updates</h4>
                        
                        <div className='border'>
                            <div className='grid grid-cols-3'>
                                <input type="text" className='' />
                            </div>
                        </div>
                        <button className='standard-btn text-sm float-end mt-2'>Add new update</button>
                    </section>
                </div>
                <div className='flex gap-2'>
                    <button type="submit" className='standard-btn w-1/4 justify-center mt-4 mb-2'>
                        {navigation.state == "submitting" && <HashLoader color='white' size={25} className='mr-3' />}
                        {navigation.state == "submitting" ? "Submitting" : "Create Ticket"}
                    </button>

                    <button type="submit" className='standard-btn-green w-1/4 justify-center mt-4 mb-2'>
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