import { useEffect, useState } from 'react'
import User from './User'
import UserDetails from './UserDetails'
import './UserList.css'

const SERVER = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

function UserList (props) {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    console.warn(data)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='user-list'>
        <div>
        {users.map(e => (
          <User
            key={e.id}
            item={e}
            onSelect={setSelectedUser}
          />
        ))}
      </div>

      <UserDetails user={selectedUser} />
    </div>
  )
}

export default UserList