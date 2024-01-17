import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Card, Row, Col, Space, List } from 'antd';
import foodImage from '../images/food.jpg'
const { Header, Content, Sider } = Layout;
const { Meta } = Card;

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
const items2 = [
    {
        key: `sub1`,
        label: "MainDish",
        children: [
            {
                key: "sub1",
                label: "Asian"
            },
            {
                key: "sub2",
                label: "European"
            }
        ]
    },


]
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined,NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });
const Dashboard = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header
                style={{
                    position: 'fixed',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Layout style={{ marginTop: 64 }}>
                <Sider
                    width={200}
                    style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 64px)',
                        position: 'sticky',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>

                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        overflow: 'auto',
                        height: 'calc(100vh - 64px)',
                        position: 'sticky',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Row gutter={16} >
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>
                        <Col span={8} style={{ marginBottom: "1%" }}>
                            <Card
                                style={{ width: 200 }}
                                cover={<img alt="example" src={foodImage} />}
                            >
                                <Meta
                                    style={{ textAlign: 'center' }}
                                    title="Noodle"
                                    description="$40"
                                />
                            </Card>
                        </Col>

                    </Row>

                </Content>
                <Sider
                    width={450}
                    style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 64px)',
                        position: 'sticky',
                        background: colorBgContainer,
                    }}
                >
                    {/* <List
                        dataSource={products}
                        renderItem={(product) => (
                            <List.Item>
                                <div>
                                    
                                </div>
                                <Space>
                                    <span>{product.name}</span>
                                    <InputNumber
                                        min={0}
                                        value={product.quantity}
                                        onChange={(value) => handleQuantityChange(product.id, value)}
                                    />
                                </Space>
                            </List.Item>
                        )}
                        
                    /> */}
                    <List style={{
                        border: '1px solid #ccc', margin: "1%", overflow: 'auto',
                        height: '60vh',
                        position: 'sticky'
                    }}>
                        <Space direction="horizontal"  >

                            <div>
                                <div>
                                    <span>Korean</span>
                                </div>
                            </div>
                            <div >
                                <div>
                                    <span>Korean</span>
                                </div>
                            </div>

                        </Space>

                    </List>
                    <List style={{
                        margin: "1%"
                        
                    }}>
                        <Space >

                            <div>
                                <div>
                                    <span>Korean</span>
                                </div>
                            </div>
                            <div >
                                <div>
                                    <span>Korean</span>
                                </div>
                            </div>

                        </Space>
                        

                    </List>
                </Sider>
            </Layout>
        </Layout>
    );
};
export default Dashboard;