import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd'
import pallete from './utils/pallete.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          colorPrimary: '#0a42a0',
          colorTextHeading: '#0f172a',
          colorText: '#475569',
          colorTextSecondary: '#64748b',
          borderRadius: 8,
          controlHeightLG: 48,
        },
        components: {
          Menu: {
            itemColor: pallete.grey[500],
            itemHoverBg: '#1475c517',
            itemHoverColor: '#0a42a0',
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
