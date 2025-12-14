'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"

// Extend Window interface for socket.io
declare global {
  interface Window {
    io: any
  }
}

interface User {
  id: number
  username: string
  email: string
  [key: string]: any
}

interface AssignmentResult {
  assigned_user: User
  order_id: number
  [key: string]: any
}

interface UserAssignmentDropdownProps {
  orderId: number | string
  currentAssignee: number | string | null
  onAssignmentChange?: (orderId: number | string, userId: number | string | null, user: User) => void
}

export function UserAssignmentDropdown({ orderId, currentAssignee, onAssignmentChange }: UserAssignmentDropdownProps) {
  const [availableUsers, setAvailableUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [assignmentSuccess, setAssignmentSuccess] = useState('')

  // Fetch available users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/users`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        })
        if (response.ok) {
          const users = await response.json()
          setAvailableUsers(users)
        }
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [])

  // Handle order assignment
  const handleAssignment = async (userId: number | string | null) => {
    if (!userId || userId === currentAssignee) return

    setIsLoading(true)
    try {
      const response = await fetch(`${BACKEND_URL}/api/orders/${orderId}/assign/${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const result = await response.json()

        // Show success message briefly
        setAssignmentSuccess(`✓ Assigned to ${result.assigned_user.username}`)

        // Notify parent component about the assignment change
        onAssignmentChange && onAssignmentChange(orderId, userId, result.assigned_user)

        // Close dropdown and clear success message after 2 seconds
        setTimeout(() => {
          setIsOpen(false)
          setTimeout(() => setAssignmentSuccess(''), 500)
        }, 1500)

        // Emit WebSocket event if socket.io is available
        if (window.io) {
          window.io.emit('order_assigned', result)
        }

      } else {
        const error = await response.json()
        alert(`Assignment failed: ${error.detail}`)
      }
    } catch (error) {
      console.error('Assignment error:', error)
      alert('Failed to assign order. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Get current assignee name
  const getAssigneeName = (userId: number | string | null) => {
    if (!userId) return 'Unassigned'
    const user = availableUsers.find(u => u.id === userId)
    return user ? user.username : `User ${userId}`
  }

  return (
    <div className="relative">
      {/* Assignment Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xs transition-colors ${assignmentSuccess ? 'bg-green-100 text-green-700' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? '...' : getAssigneeName(currentAssignee)}
        <span className="ml-1">{assignmentSuccess ? '✓' : '▼'}</span>
      </Button>

      {/* Success notification overlay */}
      {assignmentSuccess && (
        <div className="absolute left-0 z-50 px-2 py-1 text-xs text-white bg-green-500 rounded -top-8 whitespace-nowrap">
          {assignmentSuccess}
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <Card className="absolute right-0 z-50 w-56 mt-1 bg-white border border-gray-200 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-2 overflow-y-auto max-h-48">
            <div className="space-y-1">
              {/* Unassign option */}
              <button
                onClick={() => handleAssignment(null)}
                className="w-full px-3 py-2 text-sm text-left text-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 disabled:opacity-50"
                disabled={!currentAssignee}
              >
                ❌ Unassign
              </button>

              {/* Divider */}
              <hr className="my-1 border-gray-200 dark:border-gray-600" />

              {/* User options */}
              {availableUsers.map(user => (
                <button
                  key={user.id}
                  onClick={() => handleAssignment(user.id)}
                  className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition-colors ${
                    user.id === currentAssignee
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  disabled={user.id === currentAssignee}
                >
                  <div className="flex items-center justify-between">
                    <span>{user.username}</span>
                    {user.id === currentAssignee && (
                      <span className="text-blue-500">✓</span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
