import { updateStatus } from '@/action/contact'
import Form from 'next/form'
import React from 'react'

const StatusButton = ({id}) => {

    const actions = updateStatus.bind(null, id)

  return (
    <Form action={actions}>
        <button className='bg-green-400 text-white px-3 py-1 mt-2'>Mark Resolved</button>
    </Form>
  )
}

export default StatusButton
