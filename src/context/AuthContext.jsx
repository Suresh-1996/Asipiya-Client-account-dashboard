import React, { createContext, useState, useEffect, useContext } from "react"
import axios from "axios"

// Create context
export const AuthContext = createContext()

// API base URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      // Check if token exists
      const token = localStorage.getItem("auth_token")
      console.log(token)
      if (token) {
        // Set default Authorization header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

        try {
          const res = await axios.get(`${API_URL}/auth/user`)
          setUser(res.data)
        } catch (err) {
          console.error("Auth initialization error:", err)
          localStorage.removeItem("auth_token")
          delete axios.defaults.headers.common["Authorization"]
        }
      }

      setLoading(false)
    }

    initAuth()
  }, [])

  // Regular login
  const login = async (email, password) => {
    setError(null)
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      })

      // Set token and user
      localStorage.setItem("auth_token", res.data.token)
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${res.data.token}`
      setUser(res.data.user)

      return res.data
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
      throw err
    }
  }

  // Google login redirect
  const googleLogin = () => {
    window.location.href = `${API_URL}/auth/google`
  }

  // Handle auth callback (for Google OAuth)
  const handleAuthCallback = (token) => {
    if (token) {
      localStorage.setItem("auth_token", token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

      // Fetch user info with the token
      axios
        .get(`${API_URL}/auth/user`)
        .then((res) => {
          setUser(res.data)
        })
        .catch((err) => {
          console.error("Error fetching user info:", err)
          logout()
        })
    }
  }

  // Update user details
  const updateUser = async (userId, updatedData) => {
    console.log(updatedData)
    try {
      const res = await axios.put(
        `${API_URL}/auth/update/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
          },
        },
      )
      // Update the user state with the new data
      setUser((prevUser) => ({
        ...prevUser,
        ...updatedData,
      }))
      console.log("User updated successfully:", res.data)
      return res.data
    } catch (error) {
      console.error(
        "Error updating user:",
        error.response?.data || error.message,
      )
      throw error
    }
  }

  // Logout
  const logout = () => {
    // Clear local storage and state
    localStorage.removeItem("auth_token")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)

    // Call logout endpoint (optional)
    axios.get(`${API_URL}/auth/logout`).catch((err) => {
      console.error("Logout error:", err)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        updateUser,
        googleLogin,
        handleAuthCallback,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default AuthContext
