"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const DashboardPage = () => {

  const search = useSearchParams();
  const tab = search.get('tab') || 'analytics'

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <div className='flex gap-4 mb-6'>
        <Link
          href='/shop/dashboard?tab=analytics'
          className={tab === 'analytics' ? "font-bold underline" : ""}
        >
          Analytics
        </Link>
        <Link
          href='/shop/dashboard?tab=sales'
          className={tab === 'sales' ? "font-bold underline" : ""}
        >
          Sales
        </Link>
        <Link
          href='/shop/dashboard?tab=customers'
          className={tab === 'customers' ? "font-bold underline" : ""}
        >
          Customers
        </Link>
      </div >
      <div>
        {tab === "analytics" && <p>Showing analytics data</p>}
        {tab === "sales" && <p>Showing Sales data</p>}
        {tab === "customers" && <p>Showing customers data</p>}
      </div>
    </div>
  )
}

export default DashboardPage
