import React from 'react'

export const metadata = {
    title: {
      default: "Dashboard Page",
      template: "%s | Dashboard Page"
    },
    description: "This is the dashboard page of our website",
}

const DashboardLayout = ({children}) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  )
}

export default DashboardLayout
