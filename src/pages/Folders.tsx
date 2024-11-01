import { FileOutlined, FolderOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Collapse, List, Space } from 'antd';
type FileItem = {
  type: 'file';
  name: string;
};

type FolderItem = {
  type: 'folder';
  name: string;
  children: Item[];
};

type Item = FileItem | FolderItem;

const data: Item[] = [
  {
    type: 'folder',
    name: 'src',
    children: [
      { type: 'file', name: 'index.js' },
      {
        type: 'folder',
        name: 'components',
        children: [
          { type: 'file', name: 'Button.js' },
          { type: 'file', name: 'Input.js' },
        ],
      },
    ],
  },
  { type: 'file', name: 'README.md' },
];

const { Panel } = Collapse;

interface FolderListProps {
  data: Item[];
}

const FolderList: React.FC<FolderListProps> = ({ data }) => {
  return (
    <Card style={{ marginBottom: 8 }} bordered={false} bodyStyle={{ padding: 12 }}>
      <List
        dataSource={data}
        renderItem={(item) =>
          item.type === 'folder' ? (
            <Collapse bordered={false}>
              <Panel
                header={
                  <Space>
                    <FolderOutlined />
                    <span>{item.name}</span>
                  </Space>
                }
                key={item.name}
              >
                <FolderList data={item.children} />
              </Panel>
            </Collapse>
          ) : (
            <List.Item key={item.name} style={{ padding: '8px 16px' }}>
              <Space>
                <FileOutlined />
                <span>{item.name}</span>
              </Space>
            </List.Item>
          )
        }
      />
    </Card>
  );
};

const Folders = () => {
  return (
    <PageContainer title="Folders">
      <FolderList data={data} />
    </PageContainer>
  );
};

export default Folders;
