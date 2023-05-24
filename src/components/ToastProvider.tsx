"use client"

import React from 'react'
import { Toaster } from 'react-hot-toast'

interface IToaster {
    children: React.ReactNode
}

const ToastProvider : React.FC <IToaster> = ({children}) => {
  return (
    <>
    <Toaster/>
    {children}
    </>
  )
}

export default ToastProvider; 