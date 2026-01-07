import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuth();

    if (loading) {
        return <p className='text-center mt-10'>Loading...</p>
    }

    if(!user){
        return <Navigate to='/login' replace />
    }

  return children
}

export default ProtectedRoute