import React from 'react';
import { Input, Button, ConfigProvider, Card, Flex } from 'antd';
import { Icon } from '@iconify/react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

export default function ChatPage() {
  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#f8fafc', overflow: 'hidden', height: '100%' }}>

      {/* Center Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        {/* Chat Content */}
        <div style={{ flex: 1, padding: '32px 60px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '140px' }}>

          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '16px', marginBottom: '32px' }}>
            <p style={{ marginBottom: '8px', color: '#475569' }}>Tanyakan apapun mengenai data anggaran</p>
            <p style={{ maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>Gunakan kecerdasan buatan untuk menganalisis, memvisualisasikan, dan mendeteksi anomali dalam anggaran Anda secara real-time.</p>
          </div>

          {/* User Message */}
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#0a42a0', color: 'white', padding: '16px 20px', borderRadius: '16px 16px 0 16px', maxWidth: '60%', fontSize: '14px', lineHeight: 1.6, boxShadow: '0 4px 12px rgba(10, 66, 160, 0.15)' }}>
            Berikan saya rincian Anggaran Pendidikan 2024 dan bandingkan dengan tahun sebelumnya.
          </div>

          {/* AI Message */}
          <div style={{ display: 'flex', gap: '16px', maxWidth: '85%' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#00f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '12px', boxShadow: '0 0 10px rgba(0, 246, 255, 0.5)' }}>
              <Icon icon="ph:sparkle-fill" style={{ color: '#0a42a0', fontSize: '16px' }} />
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px 16px 16px 0', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', width: '100%' }}>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
                Tentu. Berikut adalah analisis mendalam mengenai Anggaran Pendidikan tahun 2024. Total pagu meningkat sebesar 7.2% dibandingkan tahun 2023, dengan fokus utama pada pemulihan infrastruktur sekolah dasar di daerah tertinggal.
              </p>

              {/* Table */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', backgroundColor: '#f8fafc' }}>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Kategori Program</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Pagu 2024 (T)</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Pertumbuhan</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Beasiswa Nasional</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 124.5</td>
                      <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 600 }}>+12.4%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> <span style={{ color: '#334155' }}>Optimal</span>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Gaji Tenaga Pendidik</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 289.2</td>
                      <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 600 }}>+4.1%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> <span style={{ color: '#334155' }}>Stabil</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Infrastruktur Sekolah</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 88.7</td>
                      <td style={{ padding: '14px 16px', color: '#e11d48', fontWeight: 600 }}>-2.3%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e11d48' }}></span> <span style={{ color: '#334155' }}>Review</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#475569', cursor: 'pointer', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>Cari anggaran terbesar</div>
                <div style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#475569', cursor: 'pointer', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>Bandingkan realisasi vs target</div>
              </div>

              {/* Charts Box */}
              <div style={{ display: 'flex', gap: '16px', height: '180px' }}>
                <div style={{ flex: 1, backgroundColor: '#f8fafc', borderRadius: '12px', padding: '16px', position: 'relative', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '8px' }}>Trend anggaran 5 tahun</div>
                  <div style={{ height: '130px', width: '100%' }}>
                    <ResponsiveBar
                      data={[
                        { year: '2020', value: 80 },
                        { year: '2021', value: 85 },
                        { year: '2022', value: 95 },
                        { year: '2023', value: 105 },
                        { year: '2024', value: 124 },
                      ]}
                      keys={['value']}
                      indexBy="year"
                      margin={{ top: 10, right: 10, bottom: 24, left: 10 }}
                      padding={0.3}
                      colors="#0a42a0"
                      borderRadius={4}
                      enableGridY={false}
                      axisLeft={null}
                      axisBottom={{
                        tickSize: 0,
                        tickPadding: 8,
                        rotation: 0,
                      }}
                      theme={{
                        axis: { ticks: { text: { fontSize: 10, fill: '#64748b', fontWeight: 600 } } }
                      }}
                      enableLabel={false}
                    />
                  </div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #dcfce7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 600, marginBottom: '12px', fontSize: '13px' }}>
                    <Icon icon="mingcute:bulb-fill" style={{ fontSize: '18px' }} /> Insight Analisis
                  </div>
                  <p style={{ fontSize: '13px', color: '#065f46', lineHeight: 1.6 }}>
                    Serapan anggaran beasiswa mencapai 98% di Semester I. Fokuskan percepatan untuk infrastruktur yang perlu ditinjau ulang.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Input Box */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 120px)', maxWidth: '850px', zIndex: 20 }}>
          <Card size='small' style={{ borderRadius: 21 }} >
            <Flex align='center' gap={10} >
              <Input.TextArea
                rows={1}
                autoSize
                size='large'
                placeholder='Ketik sesuatu'
                styles={{
                  textarea: {
                    // padding: 0,
                    border: 0,
                    outlineStyle: 0,
                    boxShadow: 0
                  }
                }}
              />
              <Button
                type="primary"
                shape='circle'
                icon={<Icon icon="mingcute:send-plane-fill" style={{ fontSize: '21px' }} />}
                style={{ marginRight: 10, height: 38, width: 38 }}
              />
            </Flex>
          </Card>
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{ width: '340px', backgroundColor: '#ffffff', borderLeft: '1px solid #f1f5f9', padding: 24, overflowY: 'auto', overflowX: 'hidden', zIndex: 10, height: '100%' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#0f172a', fontWeight: 600, fontSize: '16px' }}>
          <Icon icon="ph:chart-line-up" style={{ color: '#0ea5e9', fontSize: '20px' }} /> AI Insights Summary
        </div>

        {/* 2x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
          <div style={{ borderLeft: '4px solid #0a42a0', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Total Pagu</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 2.400T</div>
          </div>
          <div style={{ borderLeft: '4px solid #14b8a6', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Realisasi</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 1.100T</div>
          </div>
          <div style={{ borderLeft: '4px solid #b45309', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Sisa Anggaran</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 1.300T</div>
          </div>
          <div style={{ borderLeft: '4px solid #06b6d4', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Serapan</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>45.8%</div>
          </div>
        </div>

        <div style={{ fontSize: '14px', color: '#475569', fontWeight: 600, marginBottom: '20px' }}>Distribusi Sektor</div>
        <div style={{ height: '180px', width: '100%', marginBottom: '20px' }}>
          <ResponsivePie
            data={[
              { id: 'Pendidikan', value: 20, color: '#0a42a0' },
              { id: 'Kesehatan', value: 15, color: '#b45309' },
              { id: 'Lainnya', value: 65, color: '#5e24f1ff' }
            ]}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.75}
            padAngle={2}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ datum: 'data.color' }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            isInteractive={true}
            layers={['arcs', ({ centerX, centerY }) => (
              <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '16px', fontWeight: 700, fill: '#0f172a' }}
              >
                2024
              </text>
            )]}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 500 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0a42a0' }}></div> Pendidikan
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>20%</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 500 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#b45309' }}></div> Kesehatan
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>15%</div>
          </div>
        </div>

        {/* Anomaly Detected Alert */}
        <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '12px', padding: '16px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e11d48', fontWeight: 600, fontSize: '13px', marginBottom: '8px' }}>
            <Icon icon="mingcute:alert-octagon-fill" style={{ fontSize: '18px' }} /> Anomaly Detected
          </div>
          <div style={{ color: '#be123c', fontSize: '12px', lineHeight: 1.6 }}>
            Ditemukan lonjakan belanja alat tulis di Satker Wilayah X sebesar 400% dari periode sebelumnya.
          </div>
        </div>

        <div style={{ fontSize: '14px', color: '#475569', fontWeight: 600, marginBottom: '16px' }}>Top Spending Entity</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc', marginBottom: '32px', border: '1px solid #f1f5f9' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="mingcute:building-3-line" style={{ color: '#0a42a0', fontSize: '20px' }} />
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>Kementrian PUPR</div>
            <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>Rp 146.7 Triliun</div>
          </div>
        </div>

        {/* Chart Image Placeholder */}
        <div style={{ height: '140px', borderRadius: '16px', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden', padding: '20px', display: 'flex', alignItems: 'flex-end', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.8, background: 'linear-gradient(45deg, #0a42a0, #082f49)' }}></div>
          {/* Simple abstract line illustration */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 200 100" preserveAspectRatio="none">
            <path d="M0,80 Q25,30 50,70 T100,40 T150,60 T200,20 L200,100 L0,100 Z" fill="rgba(0, 246, 255, 0.1)" />
            <path d="M0,80 Q25,30 50,70 T100,40 T150,60 T200,20" fill="none" stroke="#00f6ff" strokeWidth="1" />
            <circle cx="50" cy="70" r="2" fill="#00f6ff" />
            <circle cx="100" cy="40" r="2" fill="#00f6ff" />
            <circle cx="150" cy="60" r="2" fill="#00f6ff" />
          </svg>
          <div style={{ fontSize: '11px', color: '#e2e8f0', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon icon="mingcute:check-circle-line" /> Data Verified by FinAI
          </div>
        </div>
      </div>

    </div>
  );
}
