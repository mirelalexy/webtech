import User from './User'

function PowerUserList({ users }) {
  const filtered = users.filter(u => u.type === 'power-user')

  return (
    <div>
      <h2>Power users</h2>
      {filtered.map(u => (
        <User key={u.id} item={u} />
      ))}
    </div>
  )
}

export default PowerUserList
