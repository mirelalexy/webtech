import './User.css'

function User (props) {
  const { item, onSelect } = props

  return (
    <div className='user'
    onClick={() => onSelect(item)}
    style={{ cursor: 'pointer' }}>
      <div className='username'>
        {item.username}
      </div>
      <div className='fullName'>
        {item.fullName}
      </div>
    </div>
  )
}

export default User