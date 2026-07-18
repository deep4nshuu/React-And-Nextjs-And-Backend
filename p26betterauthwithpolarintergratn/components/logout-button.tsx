"use client";

import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const LogoutBtn = () => {

    const router = useRouter()

    const onLogout = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logout successfull")
                    router.push('/login')
                }
            }
        })
    }

  return (
    <Button variant={'destructive'} size={'lg'} onClick={onLogout}>
        Logout
    </Button>
  )
}

export default LogoutBtn
