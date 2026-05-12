import React from 'react';
import { Form, Input, Button, Checkbox, ConfigProvider, message } from 'antd';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function LoginPage() {

  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);

  const [messageApi, messageHolder] = message.useMessage()

  const handleSubmit = (val) => {

    if (val.username == 'admin' && val.password == 'admin') {
      setIsLogin(true)
      return navigate('/chat')
    } else {
      return messageApi.error('Username atau password salah')
    }

  }

  return (
    <>
      {messageHolder}
      <div style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef2f6',
        padding: '24px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          minHeight: '640px',
        }}>
          {/* Left Panel */}
          <div style={{
            flex: 1,
            backgroundColor: '#f8fafc',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid #f1f5f9'
          }}>
            <div>
              {/* Logo / App Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#3b82f6', // Bright blue
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}>
                <Icon icon="fluent:data-bar-vertical-24-filled" style={{ color: 'white', fontSize: '26px' }} />
              </div>

              {/* Title & Description */}
              <h1 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '16px',
                lineHeight: 1.2,
                letterSpacing: '-0.5px'
              }}>
                AI Budget Intelligence<br />Platform
              </h1>

              <p style={{
                fontSize: '16px',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '85%',
                marginBottom: '48px'
              }}>
                Analisis dan eksplorasi data anggaran menggunakan Artificial Intelligence yang presisi.
              </p>

              {/* Dashboard Card Preview */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.03), 0 4px 10px rgba(0,0,0,0.02)',
                border: '1px solid #f1f5f9'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb', letterSpacing: '0.5px' }}>
                    REAL-TIME FORECAST
                  </span>
                  <Icon icon="ph:stars-fill" style={{ color: '#0a42a0', fontSize: '18px' }} />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', backgroundColor: '#0a42a0', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', color: '#475569', fontFamily: 'monospace' }}>Efficiency Rate</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#0a42a0' }}>+12.4%</span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1, backgroundColor: '#f1f5f9', padding: '12px 16px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>RISK SCORE</div>
                    <div style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600 }}>Low</div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#f1f5f9', padding: '12px 16px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>OPTIMIZATION</div>
                    <div style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600 }}>Active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Left */}
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
              © 2024 Karya Data. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Right Panel */}
          <div style={{
            flex: 1,
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Selamat Datang !</h2>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '40px' }}>Enter your credentials to access the platform.</p>

            <Form
              layout="vertical"
              requiredMark={false}
              onFinish={handleSubmit}
            >
              <Form.Item
                label={<span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Nama Pengguna</span>}
                name="username"
                style={{ marginBottom: '20px' }}
                rules={[{ required: true }]}
              >
                <Input
                  size="large"
                  placeholder="name@company.com"
                  prefix={<Icon icon="mingcute:mail-line" style={{ color: '#94a3b8', marginRight: '8px', fontSize: '20px' }} />}
                  style={{ backgroundColor: '#ffffff' }}
                />
              </Form.Item>

              <Form.Item
                label={
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Kata Sandi</span>
                    {/* <a href="#" style={{ fontSize: '13px', fontWeight: 600, color: '#2563eb', textDecoration: 'none' }}>Forgot?</a> */}
                  </div>
                }
                name="password"
                style={{ marginBottom: '24px' }}
                rules={[{ required: true }]}
              >
                <Input.Password
                  size="large"
                  placeholder="••••••••"
                  prefix={<Icon icon="mingcute:lock-line" style={{ color: '#94a3b8', marginRight: '8px', fontSize: '20px' }} />}
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: '24px' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  style={{
                    backgroundColor: '#0a42a0',
                    fontSize: '15px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(10, 66, 160, 0.2)'
                  }}
                >
                  Masuk <Icon icon="mingcute:arrow-right-line" style={{ fontSize: '18px' }} />
                </Button>
              </Form.Item>
            </Form>

            {/* <div style={{ textAlign: 'center', fontSize: '14px', color: '#475569' }}>
              New to the platform?{' '}
              <a href="#" style={{ color: '#0a42a0', fontWeight: 600, textDecoration: 'none' }}>
                Request enterprise access
              </a>
            </div> */}

            {/* Footer Right */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginTop: '60px',
              borderTop: '1px solid #f1f5f9',
              paddingTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>
                <Icon icon="mingcute:shield-check-fill" style={{ fontSize: '18px' }} />
                SOC2 COMPLIANT
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>
                <Icon icon="mingcute:check-circle-line" style={{ fontSize: '18px' }} />
                GDPR READY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}