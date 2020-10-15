import React from 'react';
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
    const author = useSelector(state =>{
        console.log(userId)
            return state.users.find(user => user.id === userId)
    }
        )

        return <span>by {author ? author.name : 'Unkown Author'}</span>
}