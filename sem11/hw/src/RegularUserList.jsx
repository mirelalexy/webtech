import User from './User'

function RegularUserList({ users }) {
  const filtered = users.filter(u => u.type === 'regular-user')

  return (
    <div>
      <h2>Regular users</h2>
      {filtered.map(u => (
        <User key={u.id} item={u} />
      ))}
    </div>
  )
}

export default RegularUserList