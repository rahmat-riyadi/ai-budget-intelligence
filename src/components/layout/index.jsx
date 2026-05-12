import { Flex, Layout } from "antd"
import { Outlet } from "react-router"
import Sidebar from "./sidebar"
import Header from "./header"

export default function MainLayout() {
  return (
    <Layout style={{ height: '100vh' }} >
      <Sidebar />
      <Layout >
        <Flex vertical style={{ height: '100%' }} >
          {/* <Header /> */}
          <Layout.Content style={{ flex: 1, overflow: 'auto', backgroundColor: '#f8fafc' }} >
            <Outlet />
          </Layout.Content>
        </Flex>
      </Layout>
    </Layout>
  )
}