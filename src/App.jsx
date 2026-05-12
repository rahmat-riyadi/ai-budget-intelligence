import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import LoginPage from './pages/login'
import ChatPage from './pages/chat'
import MainLayout from './components/layout'
import { ProtectedRoute } from './components/ProtectedRoute'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
        >
          <Route path="chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
