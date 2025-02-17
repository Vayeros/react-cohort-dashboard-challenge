import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../../../App"
import ProfilePicture from "../../ProfilePicture"
import { Link } from "react-router-dom"

function Comments({ comment }) {
    const {users} = useContext(UsersContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(users.find(u => u.id == comment.contactId))
    }, [comment])
    
    if( !user) return <h1>Loading ...</h1>

    return (
        <>
            <ul className='comment-list-item'>
                <Link to={`/profile/${user.id}`}>
                    <ProfilePicture firstName={user.firstName} 
                        lastName={user.lastName} 
                        favouriteColour={user.favouriteColour}/>
                </Link>
                <div className='comment-content'>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{comment.content}</p>
                </div>
            </ul>
        </>
    )
}

export default Comments