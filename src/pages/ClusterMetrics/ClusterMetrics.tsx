import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Suspense, useState } from 'react';
import IntroduceRow from './components/IntroduceRow';
import PageLoading from './components/PageLoading';
import { fakeChartData } from './service';

import OfflineData from './components/OfflineData';

const ClustMetricsList = () => {
  const { loading, data } = useRequest(fakeChartData);
  const [currentTabKey, setCurrentTabKey] = useState<string>('');
  const handleTabChange = (key: string) => {
    setCurrentTabKey(key);
  };
  const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';
  return (
    <Suspense fallback={<PageLoading />}>
      <IntroduceRow loading={loading} visitData={data?.visitData || []} />

      <OfflineData
        activeKey={activeKey}
        loading={loading}
        offlineData={data?.offlineData || []}
        offlineChartData={data?.offlineChartData || []}
        handleTabChange={handleTabChange}
      />
    </Suspense>
  );
};

const ClusterMetrics = () => {
  return (
    <PageContainer title="Clusters Info">
      <ClustMetricsList />
    </PageContainer>
  );
};

export default ClusterMetrics;
