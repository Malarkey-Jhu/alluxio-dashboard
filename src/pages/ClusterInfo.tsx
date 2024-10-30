import {
    ProList,
    PageContainer,
  } from '@ant-design/pro-components';
  import { Progress, Tag } from 'antd';
  import { history } from 'umi';


  const clusterData = [
    {
        id: 1,
        name: 'Cluster 1',
        status: 'running',
        progress: 100,
    },
    {
        id: 2,
        name: 'Cluster 2',
        status: 'publishing',
        progress: 20,
    },
    {
        id: 3,
        name: 'Cluster 3',
        status: 'running',
        progress: 100,
    },
  ]

  const data = clusterData.map((item) => ({
    title: item.name,
    subTitle: <Tag color="#5BD8A6">us-east-1</Tag>,
    actions: [
        <a key="delete" onClick={() => history.push(`/cluster-management?id=${item.id}`)}>配置</a>,
        <a key="delete" onClick={() => history.push(`/cluster-metrics?id=${item.id}`)}>查看</a>
    ],
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
    content: (
      <div
        style={{
          width: 200
        }}
      >
        <div
        >
        <div>{item.status === 'running' ? '運行中': '發佈中'}</div>
        <Progress percent={item.progress} />
        </div>

      </div>
    ),
  }));
  
const ClustInfoList = () => {
    return (
      <div
        style={{
        //   backgroundColor: '#eee',
          margin: -24,
          padding: 24,
        }}
      >
        <ProList<any>
          pagination={{
            defaultPageSize: 8,
            showSizeChanger: false,
          }}
          showActions="hover"
        //   rowSelection={{}}
          grid={{ gutter: 16, column: 2 }}
          onItem={(record: any) => {
            return {
              onMouseEnter: () => {
                console.log(record);
              },
              onClick: () => {
                console.log(record);
              },
            };
          }}
          metas={{
            title: {},
            subTitle: {},
            type: {},
            avatar: {},
            content: {},
            actions: {},
          }}
          headerTitle="Clusters"
          dataSource={data}
        />
      </div>
    );
  };

const ClusterInfo = () => {
    return (
        <PageContainer title="Clusters Info">
            <ClustInfoList />
        </PageContainer>
    )
}

export default ClusterInfo;