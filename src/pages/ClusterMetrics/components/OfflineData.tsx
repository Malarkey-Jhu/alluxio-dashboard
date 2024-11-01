import { Line } from '@ant-design/plots';
import { Card, Tabs } from 'antd';
import type { DataItem, OfflineDataType } from '../data';
import useStyles from '../style.style';

const OfflineData = ({
  activeKey,
  loading,
  offlineData,
  offlineChartData,
  handleTabChange,
}: {
  activeKey: string;
  loading: boolean;
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
  handleTabChange: (activeKey: string) => void;
}) => {
  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      className={styles.offlineCard}
      bordered={false}
      style={{
        marginTop: 32,
      }}
    >
      <Tabs
        activeKey={activeKey}
        onChange={handleTabChange}
        items={offlineData.map((shop) => ({
          key: shop.name,
          label: shop.name,
          children: (
            <div
              style={{
                padding: '0 24px',
              }}
            >
              <Line
                height={400}
                data={offlineChartData}
                xField="date"
                yField="value"
                colorField="type"
                slider={{ x: true }}
                axis={{
                  x: { title: false },
                  y: { title: false, gridLineDash: null, gridStroke: '#ccc', gridStrokeOpacity: 1 },
                }}
                legend={{
                  color: {
                    layout: { justifyContent: 'center' },
                  },
                }}
              />
            </div>
          ),
        }))}
      />
    </Card>
  );
};
export default OfflineData;
