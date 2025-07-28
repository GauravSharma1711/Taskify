import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';
import authService from '../api/authService.js';

const useAuthStore = create(persist(
  (set) => ({
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: false,
    authUser: null,

    signUp: async (data) => {
      try {
        set({ isSigningUp: true });
        const res = await authService.register(data);
        set({ authUser: res.user });
        toast.success(res.message || 'Signed up successfully!');
        return res;
      } catch (error) {
        console.error("Error while signing up:", error);
        toast.error(error?.response?.data?.error || 'Signup failed');
        throw error
      } finally {
        set({ isSigningUp: false });
      }
    },

    login: async (data) => {
      try {
        set({ isLoggingIn: true });
        const res = await authService.login(data);
        set({ authUser: res.user });
        toast.success(res.message || 'Logged in successfully!');
        return res;
      } catch (error) {
        console.error("Error while logging in:", error);
        toast.error('Login failed');
        throw error
      } finally {
        set({ isLoggingIn: false });
      }
    },

    logout: async () => {
      try {
         await authService.logout();
        set({ authUser: null });
        toast.success('Logged out successfully!');
      } catch (error) {
        console.error("Error while logging out:", error);
        toast.error('Logout failed');
      }
    },

    getCurrentUser: async () => {
      try {
        const res = await authService.getCurrentUser();
        set({ authUser: res.data.user });
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    },

    forgotPassword: async (email) => {
      try {
        const res = await authService.forgotPasswordRequest(email);
        toast.success(res.data.message || 'Forgot password request sent');
      } catch (error) {
        console.error("Error in forgot password:", error);
        toast.error(error?.response?.data?.error || 'Request failed');
      }
    },

    changeCurrentPassword: async (data) => {
      try {
        const res = await authService.changeCurrentPassword(data);
        toast.success(res.data.message || 'Password changed successfully');
      } catch (error) {
        console.error("Error changing password:", error);
        toast.error(error?.response?.data?.error || 'Change failed');
      }
    }
  }),
  {
    name: 'auth-storage', // persist key in localStorage
  }
));

export default useAuthStore;
