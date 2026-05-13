import { Table, Typography } from "antd";
import { useEffect, useRef, useState } from "react";

export default function DataFrameBlock({ block, bIndex }) {
  const { data, columns, title, description } = block.data;
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const tableColumns = columns.map(col => ({
    title: (
      <Typography.Text style={{ fontSize: '12px' }}>
        {col.replace(/_/g, ' ').toUpperCase()}
      </Typography.Text>
    ),
    dataIndex: col,
    key: col,
    // width: 150,
    // minWidth: 'max-content',
    minWidth: 100,
    render: (text) => {
      if (typeof text === 'number' && !col.toLowerCase().includes('tahun')) {
        return (
          <Typography.Text style={{ fontSize: '12px' }}>
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(text)}
          </Typography.Text>
        )
      }
      // return text;
      return (
        <Typography.Text style={{ fontSize: '12px' }}>
          {text}
        </Typography.Text>
      )
    },
    // ellipsis: true,
  }));

  return (
    <div
      ref={containerRef}
      key={block.id || bIndex}
      style={{
        marginTop: '8px',
        width: '100%',
        overflow: 'hidden',
        minWidth: 0
      }}
    >
      {title && <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>{title}</div>}
      {description && <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>{description}</div>}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #f1f5f9',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        overflow: 'hidden',
        maxWidth: '100%'
      }}>
        <Table
          dataSource={data}
          columns={tableColumns}
          size="small"
          pagination={data.length > 5 ? { pageSize: 5, size: 'small' } : false}
          rowKey={(record, idx) => record.id || idx}
          scroll={{ x: columns.length * 150 }}
          style={{ width: containerWidth }}
        />
      </div>
    </div>
  );
};