import './usercard.css'

export default function UserCard({user}){
    return (
        <div className='user'>
            <h2>User Name : {user.name}</h2>
            <h2>Email: {user.email}

            </h2>

            
        </div>
    )
}