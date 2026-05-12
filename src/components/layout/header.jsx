import { Icon } from "@iconify/react";
import { Input, Layout } from "antd";

export default function Header() {
  return (
    <Layout.Header
      style={{
        backgroundColor: '#fff'
      }}
    >
      {/* <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>AI Budget Assistant</div>
        <div style={{ display: 'flex', gap: '24px', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#0a42a0', fontWeight: 600, fontSize: '14px', borderBottom: '2px solid #0a42a0', cursor: 'pointer' }}>Real-time Monitor</div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#64748b', fontSize: '14px', cursor: 'pointer' }}>Scenario Planner</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Input
          prefix={<Icon icon="mingcute:search-line" style={{ color: '#94a3b8', fontSize: '16px' }} />}
          placeholder="Search data..."
          style={{ borderRadius: '20px', backgroundColor: '#f1f5f9', border: 'none', width: '220px', padding: '8px 16px' }}
        />
        <Icon icon="mingcute:notification-line" style={{ fontSize: '22px', color: '#475569', cursor: 'pointer' }} />
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Icon icon="mingcute:user-3-line" style={{ fontSize: '18px', color: '#475569' }} />
        </div>
      </div> */}
    </Layout.Header>
    // <div style={{ height: '64px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between', zIndex: 10 }}>


    // </div>
  )
}