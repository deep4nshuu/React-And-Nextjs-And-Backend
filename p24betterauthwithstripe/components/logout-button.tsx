"use client";

import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';


const LogoutButton = () => {

    const router = useRouter()

    const onLogout = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logout successfully")
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

export default LogoutButton
