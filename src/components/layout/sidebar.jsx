import { Icon } from "@iconify/react";
import { Button, Divider, Flex, Layout, Menu } from "antd";
import pallete from "../../utils/pallete";
import { useNavigate } from "react-router";

export default function Sidebar() {

  const navigate = useNavigate()

  return (
    <Layout.Sider
      style={{
        backgroundColor: '#fff',
        height: '100%',
        borderRight: "1px solid " + pallete.grey[200],
      }}
      width={250}
    >
      <Flex vertical style={{ height: '100%' }} >
        <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: '#0a42a0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(10, 66, 160, 0.2)' }}>
            <Icon icon="fluent:data-bar-vertical-24-filled" style={{ color: 'white', fontSize: '20px' }} />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0a42a0', lineHeight: 1.2 }}>FinAI Intelligence</div>
            <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.5px' }}>PRECISION BUDGETING</div>
          </div>
        </div>
        <Menu
          style={{
            // borderRight: "1px solid " + pallete.grey[200],
            height: '100%',
            border: 0,
            boxShadow: 'none'
          }}
          styles={{
            root: {
              border: 'none',
              boxShadow: 'none'
            },
          }}
          items={[
            {
              label: (
                <Button type="primary" block style={{ backgroundColor: '#0a42a0', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 600, boxShadow: '0 4px 12px rgba(10, 66, 160, 0.2)' }}>
                  <Icon icon="mingcute:add-line" style={{ fontSize: '18px' }} /> New Analysis
                </Button>
              ),
            },
            {
              label: "Dashboard",
              icon: (
                <Icon icon="solar:home-2-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              )
            },
            {
              label: "AI Chat",
              icon: (
                <Icon icon="solar:chat-round-dots-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              )
            },
            {
              label: "Dataset",
              icon: (
                <Icon icon="solar:database-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              )
            },
            {
              label: "Analytics",
              icon: (
                <Icon icon="solar:pie-chart-2-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              )
            },
            {
              label: "Reports",
              icon: (
                <Icon icon="solar:documents-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              )
            },
            {
              label: "History",
              type: 'group',
              icon: (
                <Icon icon="solar:clock-circle-bold-duotone" style={{ fontSize: '21px', marginBottom: -2 }} />
              ),
              children: [
                {
                  label: 'Analisis anggaran 2024 ...',
                  style: {
                    paddingBlock: 0,
                    height: 30,
                    lineHeight: 2
                  },
                },
                {
                  label: 'Subsidi Energi Q3',
                  style: {
                    paddingBlock: 0,
                    height: 30,
                    lineHeight: 2
                  }
                },
              ]
            },

          ]}
        />
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            padding: '16px 20px',
          }}
        >
          <Button
            block
            color="danger"
            variant="filled"
            onClick={() => {
              localStorage.removeItem('isLogin')
              return navigate('/login')
            }}
            // size="middle"
            icon={
              <Icon icon={'solar:logout-2-bold-duotone'} fontSize={18} />
            }
          >
            Logout
          </Button>
        </div>
      </Flex>
    </Layout.Sider>
  )
}