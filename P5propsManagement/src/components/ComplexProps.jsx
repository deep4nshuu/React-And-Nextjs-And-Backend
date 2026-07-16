import { useState } from "react"

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md border ${theme.backgroundColor} ${theme.textColor}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-3xl font-bold`}
        >
          {user.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
          <div className="flex gap-2 mt-2">
            <span className={`px-3 py-1 text-xs rounded-full ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 text-xs rounded-full ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      {user.stats && (
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions && (
        <div className="mt-6 flex gap-3">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}
          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium border ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function ComplexProps() {
  const [message, setMessage] = useState("")

  const users = [
    {
      user: {
        name: "Deepanshu Tomar",
        email: "tomarvashu@gmail.com",
        avatar: "☠️",
        role: "Admin",
        status: "Active",
        stats: { posts: 333, followers: "100k", following: 500 }
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-50 to-blue-50",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-600 text-white",
        badgeBg: "bg-purple-200"
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Deepanshu profile"),
          className: "bg-purple-600 text-white hover:bg-purple-700"
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening msg to Deepanshu profile"),
          className: "text-gray-700 hover:bg-gray-100"
        }
      }
    },
    {
      user: {
        name: "Bob Smith",
        email: "bobsmith@gmail.com",
        avatar: "🤖",
        role: "Developer",
        status: "Online",
        stats: { projects: 44, commits: 1503, reviews: 90 }
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-50 to-teal-50",
        textColor: "text-gray-800",
        avatarBg: "bg-green-600 text-white",
        badgeBg: "bg-green-200"
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob profile"),
          className: "bg-green-600 text-white hover:bg-green-700"
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Collaborating with Bob"),
          className: "text-gray-700 hover:bg-gray-100"
        }
      }
    }
  ]

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Complex/Nested Props
      </h2>
      <p className="text-gray-600 mb-6">
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated component configurations and interactions.
      </p>

      {message && (
        <div className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded">
          {message}
        </div>
      )}

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            User Profile Cards (Nested User, Theme, and Actions):
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {users.map((userData, index) => (
              <UserProfileCard key={index} {...userData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComplexProps
