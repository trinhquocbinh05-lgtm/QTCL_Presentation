import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import './Slide4.css';

const Slide4 = () => {
  const controls = useAnimation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // 1. Show title and radar grid
      await controls.start('grid');
      setStep(1);
      
      // 2. Draw the value line
      await controls.start('valueLine');
      
      // 3. Show the points sequentially
      setStep(2);
      await new Promise(r => setTimeout(r, 600));
      setStep(3);
      await new Promise(r => setTimeout(r, 600));
      setStep(4);
      await new Promise(r => setTimeout(r, 600));
      setStep(5);
      await new Promise(r => setTimeout(r, 600));
      setStep(6);
    };
    sequence();
  }, [controls]);

  // Radar Chart Calculations
  const cx = 250;
  const cy = 250;
  const getPoints = (radius) => {
    const p = [
      { x: cx, y: cy - radius },
      { x: cx + radius * 0.9511, y: cy - radius * 0.3090 },
      { x: cx + radius * 0.5878, y: cy + radius * 0.8090 },
      { x: cx - radius * 0.5878, y: cy + radius * 0.8090 },
      { x: cx - radius * 0.9511, y: cy - radius * 0.3090 }
    ];
    return p.map(point => `${point.x},${point.y}`).join(' ');
  };

  const getPoint = (radius, index) => {
    const p = [
      { x: cx, y: cy - radius },
      { x: cx + radius * 0.9511, y: cy - radius * 0.3090 },
      { x: cx + radius * 0.5878, y: cy + radius * 0.8090 },
      { x: cx - radius * 0.5878, y: cy + radius * 0.8090 },
      { x: cx - radius * 0.9511, y: cy - radius * 0.3090 }
    ];
    return p[index];
  };

  const rings = [40, 80, 120, 160, 200];
  const valueRadii = [80, 160, 200, 160, 120];
  const valuePath = valueRadii.map((r, i) => `${i === 0 ? 'M' : 'L'} ${getPoint(r, i).x},${getPoint(r, i).y}`).join(' ') + ' Z';

  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    grid: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    valueLine: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const fadeVariants = {
    hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.6, type: "spring", bounce: 0.3 } 
    }
  };

  const bulletPoints = [
    {
      title: "Cơ hội Kinh tế",
      content: "Tầng lớp trung lưu tăng, sẵn sàng chi trả cho sản phẩm tiện lợi.",
      icon: <CheckCircle2 className="bullet-icon success" size={32} />,
      color: "#38bdf8"
    },
    {
      title: "Rào cản Văn hóa",
      content: "Văn hóa cà phê vỉa hè/phin ăn sâu vào máu. Lòng tự hào dân tộc trỗi dậy ủng hộ hàng nội.",
      icon: <AlertTriangle className="bullet-icon danger" size={32} />,
      color: "#ef4444"
    },
    {
      title: "Đối thủ Cạnh tranh",
      content: "Nestlé (Tài chính đa quốc gia) và Trung Nguyên G7 (Am hiểu sâu sắc gu thưởng thức Việt, chiến lược du kích).",
      icon: <AlertTriangle className="bullet-icon danger" size={32} />,
      color: "#ef4444"
    },
    {
      title: "Quyền lực Khách hàng",
      content: "Chi phí chuyển đổi bằng không. Nếu hương vị không chuẩn, khách hàng lập tức quay lưng.",
      icon: <AlertTriangle className="bullet-icon danger" size={32} />,
      color: "#ef4444"
    },
    {
      title: "Rào cản Gia nhập",
      content: "Chi phí marketing và phân phối khổng lồ để giành thị phần. Đòi hỏi chuyên môn rang xay đặc thù.",
      icon: <AlertTriangle className="bullet-icon danger" size={32} />,
      color: "#ef4444"
    }
  ];

  return (
    <div className="slide-container slide4-container">
      <div className="slide-number">04</div>
      <motion.h1 
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Đại Dương Đỏ Ngành Cà Phê (PEST & 5 Forces)
      </motion.h1>

      <div className="content-layout">
        <div className="chart-section">
          <svg viewBox="-50 -50 600 600" className="radar-svg">
            <defs>
              <filter id="glow-slide4" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Background Areas */}
            <motion.polygon 
              points={getPoints(200)} 
              fill="rgba(239, 68, 68, 0.15)" 
              stroke="rgba(239, 68, 68, 0.3)" 
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={controls}
              variants={{ grid: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, type: "spring", bounce: 0.4 } } }}
              style={{ transformOrigin: '250px 250px' }}
            />
            <motion.polygon 
              points={getPoints(80)} 
              fill="rgba(56, 189, 248, 0.25)" 
              stroke="none"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{ grid: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } } }}
            />

            {/* Grid Rings */}
            <motion.g initial="hidden" animate={controls} variants={drawVariants}>
              {rings.map((r, i) => (
                <polygon 
                  key={`ring-${i}`} 
                  points={getPoints(r)} 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth="1" 
                />
              ))}
              
              {/* Axes */}
              {[0, 1, 2, 3, 4].map(i => {
                const p = getPoint(200, i);
                return (
                  <line 
                    key={`axis-${i}`} 
                    x1={cx} y1={cy} 
                    x2={p.x} y2={p.y} 
                    stroke="rgba(255, 255, 255, 0.2)" 
                    strokeWidth="1" 
                  />
                );
              })}
            </motion.g>

            {/* Value Polygon */}
            <motion.path
              d={valuePath}
              fill="rgba(56, 189, 248, 0.3)"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeLinejoin="round"
              initial="hidden"
              animate={controls}
              variants={lineVariants}
            />



            {/* Value Points */}
            {step >= 1 && valueRadii.map((r, i) => (
              <motion.circle
                key={`point-${i}`}
                cx={getPoint(r, i).x}
                cy={getPoint(r, i).y}
                r="6"
                fill="#0b1f38"
                stroke="#38bdf8"
                strokeWidth="3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
              />
            ))}

            {/* Axis Labels */}
            <motion.g 
              className="axis-labels"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{ grid: { opacity: 1, transition: { delay: 1, duration: 0.5 } } }}
            >
              <text x={cx} y={cy - 220} textAnchor="middle">Cơ hội Kinh tế</text>
              <text x={cx + 220} y={cy - 50} textAnchor="start">Rào cản Văn hóa</text>
              <text x={cx + 150} y={cy + 220} textAnchor="start">Đối thủ Cạnh tranh</text>
              <text x={cx - 150} y={cy + 220} textAnchor="end">Quyền lực Khách hàng</text>
              <text x={cx - 220} y={cy - 50} textAnchor="end">Rào cản Gia nhập</text>
            </motion.g>
          </svg>
        </div>

        <div className="bullets-section">
          {bulletPoints.map((bp, index) => (
            <motion.div 
              key={index}
              className={`bullet-card ${bp.color === '#ef4444' ? 'danger-neon' : ''}`}
              initial="hidden"
              animate={step > index + 1 ? "visible" : "hidden"}
              variants={fadeVariants}
              whileHover={{ 
                scale: 1.03, 
                x: 10,
                boxShadow: bp.color === '#ef4444' ? "0 1cqw 2cqw rgba(239, 68, 68, 0.4)" : "0 1cqw 2cqw rgba(56, 189, 248, 0.4)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="icon-container">
                {bp.icon}
              </div>
              <div className="bullet-text">
                <h3 style={{ color: bp.color }}>{bp.title}</h3>
                <p>{bp.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide4;
