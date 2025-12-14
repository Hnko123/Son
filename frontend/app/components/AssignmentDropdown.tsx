'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '../../components/ui/card'

interface User {
  id: number
  username: string
  email: string
}

interface AssignmentDropdownProps {
  orderId: number
  currentAssignee: number | null
  onAssignmentChange?: (orderId: number, userId: number | null, assignedUser?: User) => void
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"

export function AssignmentDropdown({ orderId, currentAssignee, onAssignmentChange }: AssignmentDropdownProps) {
  const [availableUsers, setAvailableUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
  const handleAssignment = async (userId: number | null) => {
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
        // Notify parent component about the assignment change
        onAssignmentChange && onAssignmentChange(orderId, userId, result.assigned_user)

        // Close dropdown
        setIsOpen(false)

        // Show success notification (you can integrate with your notification system)
        alert(`Order #${orderId} assigned to ${result.assigned_user.username}!`)
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
  const getAssigneeName = (userId: number | null): string => {
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
        className="text-xs"
        disabled={isLoading}
      >
        {isLoading ? '...' : getAssigneeName(currentAssignee)}
        <span className="ml-1">▼</span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <Card className="absolute z-50 w-48 mt-1 border border-gray-200 shadow-lg dark:border-gray-700">
          <CardContent className="p-2 overflow-y-auto max-h-40">
            <div className="space-y-1">
              {/* Unassign option */}
              <button
                onClick={() => handleAssignment(null)}
                className="w-full px-2 py-1 text-xs text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                disabled={!currentAssignee}
              >
                Unassign
              </button>

              {/* User options */}
              {availableUsers.map(user => (
                <button
                  key={user.id}
                  onClick={() => handleAssignment(user.id)}
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-xs ${
                    user.id === currentAssignee ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : ''
                  }`}
                  disabled={user.id === currentAssignee}
                >
                  {user.username} ({user.email})
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
