function Card({children, color='skyBlue', title}){
  const colorClass = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-l-green-500 bg-green-50",
    purple: "border-l-purple-500 bg-purple-100",
    red: "border-l-red-500 bg-red-50",
    skyBlue: "border-l-blue-500 bg-blue-50"
  }

  return (
    <div className={`border-l-4 ${colorClass[color]} p-6 rounded-lg shadow-md`}>
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function Container({children, layout="vertical"}){
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  }

  return <div className={layoutClasses[layout]}>{children}</div>
}


function ChildrenProps(){
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Children Props
      </h2>
      <p className="text-gray-700 py-3">The <span className="font-sm bg-blue-50 px-2 mt-2 rounded-lg">children</span> prop allows you to pass JSX elements or components as children to other components, enabling component composition.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Card Component with Chidren:
          </h3>
          <Container layout="grid">
            <Card title="User Profile" color="skyBlue">
              <p className="mb-2">
                <strong>Name:</strong> Hitesh Chaudhary
              </p>
              <p className="mb-2">
                <strong>Email:</strong> tomarvashu@gamil.com 
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Devloper
              </p>
            </Card>
            <Card title="Statistics" color="green">
              <div className="flex justify-between mt-2 mb-2">
                <span>Total Users:</span>
                <strong>1,234</strong>
              </div>
              <div className="flex justify-between mt-2 mb-2">
                <span>Active Sessions:</span>
                <strong>567</strong>
              </div>
              <div className="flex justify-between">
                <span>Revenue:</span>
                <strong>$89,000</strong>
              </div>
            </Card>
            <Card title="Quick Actions" color="purple">
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                  Create New
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                  View All
                </button>
              </div>
            </Card>
            <Card title="Warning" color="red">
              <p className="text-gray-1000">Your trial period ends in 5 days. Please upgrade your account to continue using all features.</p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  )
}



export default ChildrenProps
