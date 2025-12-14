"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { User, Mail, Shield, Camera, Save, Edit, X } from 'lucide-react';
import { avatarOptions } from './avatarOptions';

interface UserProfile {
  id?: number;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  role?: string;
  created_at?: string;
  is_active?: boolean;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfile>>({});
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const avatarPreview = formData.avatar ?? profile.avatar;

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('reduce-motion');
    if (stored !== null) {
      setReduceMotion(stored === 'true');
    } else {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(media.matches);
    }
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'reduce-motion' && event.newValue !== null) {
        setReduceMotion(event.newValue === 'true');
      }
    };
    const handleCustom = () => {
      const val = window.localStorage.getItem('reduce-motion');
      if (val !== null) {
        setReduceMotion(val === 'true');
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('reduce-motion-updated', handleCustom as EventListener);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('reduce-motion-updated', handleCustom as EventListener);
    };
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setFormData(data);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('user', JSON.stringify(data));
          window.dispatchEvent(new Event('user-profile-updated'));
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch('/api/users/me', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setProfile(updatedData);
        setFormData(updatedData);
        setEditing(false);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('user', JSON.stringify(updatedData));
          window.dispatchEvent(new Event('user-profile-updated'));
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleReduceMotion = () => {
    setReduceMotion(prev => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('reduce-motion', String(next));
        window.dispatchEvent(new Event('reduce-motion-updated'));
      }
      return next;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-white">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-transparent"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-3xl font-medium tracking-tight text-center text-white lg:text-5xl lg:leading-tight"
        >
          User Profile
        </motion.h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Avatar Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <div className="p-6 text-center border bg-gradient-to-br from-white/10 to-white/5 border-white/10 rounded-xl backdrop-blur-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block group"
              >
                <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-4 overflow-hidden text-6xl rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <User className="text-white" size={64} />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute bottom-0 right-0 w-8 h-8 p-0 rounded-full"
                  onClick={() => setShowAvatarPicker(prev => !prev)}
                >
                  {showAvatarPicker ? <X size={12} /> : <Edit size={12} />}
                </Button>
              </motion.div>
              {showAvatarPicker && (
                <div className="mt-4 p-4 border border-white/10 rounded-lg bg-black/40 max-h-64 overflow-y-auto text-left">
                  <p className="mb-2 text-sm text-white/70">Pick your avatar</p>
                  <div className="grid grid-cols-3 gap-3">
                    {avatarOptions.map(option => {
                      const isSelected = formData.avatar === option.url;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          className={`rounded-lg border transition hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                            isSelected ? 'border-purple-400 bg-purple-500/20' : 'border-white/10 bg-white/5'
                          }`}
                          onClick={() => {
                            handleInputChange('avatar', option.url);
                            setShowAvatarPicker(false);
                          }}
                        >
                          <img src={option.url} alt={option.label} className="object-cover w-full h-14 rounded-lg" />
                          <span className="block px-2 py-1 text-xs text-white/80 text-center truncate">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {profile.first_name && profile.last_name
                  ? `${profile.first_name} ${profile.last_name}`
                  : profile.username || 'User'}
              </h3>
              <p className="mb-4 text-white/70">{profile.email}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-sm text-purple-300 rounded-full bg-purple-500/20">
                <Shield size={14} />
                {profile.role || 'User'}
              </div>
            </div>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="border bg-gradient-to-br from-white/10 to-white/5 border-white/10 rounded-xl backdrop-blur-xl">
              <div className="flex flex-row items-center justify-between p-6">
                <h3 className="flex items-center gap-2 text-white">
                  <User size={20} />
                  Profile Information
                </h3>
                <Button
                  variant="outline"
                  onClick={() => setEditing(!editing)}
                  className="flex items-center gap-2"
                >
                  <Edit size={16} />
                  {editing ? 'Cancel' : 'Edit'}
                </Button>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="first_name" className="text-white/90">First Name</Label>
                    {editing ? (
                      <Input
                        id="first_name"
                        value={formData.first_name || ''}
                        onChange={(e) => handleInputChange('first_name', e.target.value)}
                        className="text-white bg-white/10 border-white/20"
                      />
                    ) : (
                      <p className="mt-1 text-white">{profile.first_name || 'Not set'}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="last_name" className="text-white/90">Last Name</Label>
                    {editing ? (
                      <Input
                        id="last_name"
                        value={formData.last_name || ''}
                        onChange={(e) => handleInputChange('last_name', e.target.value)}
                        className="text-white bg-white/10 border-white/20"
                      />
                    ) : (
                      <p className="mt-1 text-white">{profile.last_name || 'Not set'}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/90">Email</Label>
                    {editing ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="text-white bg-white/10 border-white/20"
                      />
                    ) : (
                      <p className="flex items-center gap-2 mt-1 text-white">
                        <Mail size={16} />
                        {profile.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="username" className="text-white/90">Username</Label>
                    {editing ? (
                      <Input
                        id="username"
                        value={formData.username || ''}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="text-white bg-white/10 border-white/20"
                      />
                    ) : (
                      <p className="mt-1 text-white">{profile.username}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  {profile.created_at && (
                    <p className="text-sm text-white/70">
                      Member since: {new Date(profile.created_at).toLocaleDateString()}
                    </p>
                  )}
                  {editing && (
                    <Button onClick={updateProfile} className="flex items-center gap-2 ml-auto">
                      <Save size={16} />
                      Save Changes
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Role Management Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3"
          >
            <div className="border bg-gradient-to-br from-white/10 to-white/5 border-white/10 rounded-xl backdrop-blur-xl">
              <div className="flex flex-row items-center justify-between p-6">
                <h3 className="flex items-center gap-2 text-white">
                  <Shield size={20} />
                  Role & Permissions
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-2">
                  <p className="text-white/70">
                    Current Role: <span className="font-medium text-white">{profile.role || 'User'}</span>
                  </p>
                  <p className="text-white/70">
                    Status: <span className={`font-medium ${profile.is_active ? 'text-green-400' : 'text-red-400'}`}>
                      {profile.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    Contact your administrator to change your role or account status.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Display Preferences */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="md:col-span-3"
          >
            <div className="border bg-gradient-to-br from-white/10 to-white/5 border-white/10 rounded-xl backdrop-blur-xl">
              <div className="flex flex-row items-center justify-between p-6">
                <h3 className="flex items-center gap-2 text-white">
                  Hareket Tercihleri
                </h3>
                <Button
                  variant="outline"
                  className={`px-4 ${reduceMotion ? 'border-red-300 text-red-200' : 'border-emerald-300 text-emerald-200'}`}
                  onClick={toggleReduceMotion}
                >
                  {reduceMotion ? 'Animasyonu Aç' : 'Hareketi Azalt'}
                </Button>
              </div>
              <div className="p-6 pt-0 text-sm text-white/70">
                <p>
                  Uygulama arka planındaki animasyonları {reduceMotion ? 'devre dışı bıraktınız.' : 'kullanmak üzeresiniz.'}
                  {' '}Bu ayar tüm sekmelerde geçerlidir ve dashboard arka planını etkiler.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
