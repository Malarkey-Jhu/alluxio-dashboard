// import { SmileOutlined } from '@ant-design/icons';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  //   ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Card } from 'antd';

const ClusterManagement = () => {
  return (
    <PageContainer title="Clusters Management">
      <Card>
        <ProForm
          submitter={{
            render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
          }}
          onFinish={async (values) => console.log(values)}
        >
          <ProForm.Group>
            <ProFormText
              name="name"
              label="集群名稱"
              tooltip="最长为 24 位"
              placeholder="请输入名称"
            />
            <ProFormText disabled width="md" name="cluster-id" label="集群-id" initialValue={1} />
          </ProForm.Group>
          <ProFormDigit width="xs" name="num" label="機器數量" initialValue={5} />
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: 'v1.25',
                  label: 'v1.25',
                },
                {
                  value: 'v1.24',
                  label: 'v1.24',
                },
                {
                  value: 'v1.23',
                  label: 'v1.23',
                },
              ]}
              initialValue={'v1.25'}
              name="version"
              label="集群版本"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormRadio.Group
              label="地域"
              name="geo"
              initialValue="us-east-1"
              options={['us-east-1', 'us-east-2', 'asia-east-1']}
            />
          </ProForm.Group>

          <ProFormTextArea width="xl" label="备注说明" name="remark" />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default ClusterManagement;
