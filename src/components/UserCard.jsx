import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({ user, deleteUser, setUpdatingUser, handleClickShowModal, }) => {

  //modificacion de handle

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className='userCard'>
      <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
      <hr />
      <ul className='userCard__list'>
        <li className='userCard__li'><span>Email: </span>{user.email}</li>
        <br />
        <li className='userCard__li'><span> <i className='bx bx-gift'></i> Birthday: </span> {user.birthday}</li>
      </ul>
      <hr />
      <footer className='userCard__footer'>
        <button className='userCard__trash' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button className='userCard__pencil' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
      </footer>
    </article>
  )
}

export default UserCard