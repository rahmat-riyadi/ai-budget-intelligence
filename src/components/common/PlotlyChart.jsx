import React, { useEffect, useRef, useState } from 'react';
import Plotly from 'plotly.js-dist-min';

const PlotlyChart = ({ data, layout, id }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    Plotly.react(ref.current, data, layout || {});
  }, [data, layout]);

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


  return (
    <div
      ref={containerRef}
      style={{
        marginTop: '8px',
        width: '100%',
        overflow: 'hidden',
        minWidth: 0
      }}
    >
      <div ref={ref} style={{ width: containerWidth, minHeight: 400 }} />;
    </div>
  )
};

export default PlotlyChart;