import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slide1.css';

const callouts = [
  { 
    id: 1, 
    title: "CẤU TRÚC YẾU:", 
    desc: "Định vị sản phẩm không rõ ràng.<br/>(<span class=\"highlight-red\">Độ nhận diện: 20%</span>)", 
    x: 60, y: 100, w: 450, h: 220,
    line: "M 510 210 L 600 210 L 720 350"
  },
  { 
    id: 2, 
    title: "LỖI ĐỊNH VỊ VĂN HÓA:", 
    desc: "Phản ứng tiêu cực từ người tiêu dùng.<br/>(<span class=\"highlight-red\">Mức độ: Cao</span>)", 
    x: 1410, y: 100, w: 450, h: 220,
    line: "M 1410 210 L 1320 210 L 1200 350"
  },
  { 
    id: 3, 
    title: "HỆ THỐNG PHÂN PHỐI LỖI:", 
    desc: "Cạnh tranh nội bộ và thiếu hiệu quả.<br/>(<span class=\"highlight-red\">Tác động: Nghiêm trọng</span>)", 
    x: 60, y: 500, w: 450, h: 220,
    line: "M 510 610 L 600 610 L 750 550"
  },
  { 
    id: 4, 
    title: "CƠ CHẾ SỤP ĐỔ:", 
    desc: "Chiến lược marketing thiếu liên kết.<br/>(<span class=\"highlight-red\">Kết quả: Ngừng hoạt động 2010</span>)", 
    x: 1410, y: 500, w: 450, h: 220,
    line: "M 1410 610 L 1320 610 L 1170 550"
  }
];

const cupElements = (
  <g>
    {/* Measurements */}
    <g stroke="#94a3b8" strokeWidth="1" fill="none">
      <line x1="110" y1="200" x2="130" y2="200" />
      <line x1="110" y1="650" x2="130" y2="650" />
      <line x1="120" y1="425" x2="120" y2="205" markerEnd="url(#arrowhead-dim)" />
      <line x1="120" y1="425" x2="120" y2="645" markerEnd="url(#arrowhead-dim)" />

      <line x1="220" y1="670" x2="220" y2="690" />
      <line x1="480" y1="670" x2="480" y2="690" />
      <line x1="350" y1="680" x2="225" y2="680" markerEnd="url(#arrowhead-dim)" />
      <line x1="350" y1="680" x2="475" y2="680" markerEnd="url(#arrowhead-dim)" />
    </g>

    {/* Center vertical line */}
    <line x1="350" y1="120" x2="350" y2="700" stroke="#475569" strokeWidth="1" strokeDasharray="5 5" />
    
    {/* Cup shape */}
    <ellipse cx="350" cy="200" rx="200" ry="40" fill="rgba(255,255,255,0.02)" stroke="#94a3b8" strokeWidth="2" />
    <ellipse cx="350" cy="210" rx="190" ry="35" fill="none" stroke="#64748b" strokeWidth="1" />
    <ellipse cx="350" cy="425" rx="165" ry="32" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
    <ellipse cx="350" cy="650" rx="130" ry="25" fill="rgba(255,255,255,0.02)" stroke="#94a3b8" strokeWidth="2" />
    <ellipse cx="350" cy="630" rx="135" ry="26" fill="none" stroke="#64748b" strokeWidth="1" />
    
    <line x1="150" y1="200" x2="220" y2="650" stroke="#94a3b8" strokeWidth="2" />
    <line x1="550" y1="200" x2="480" y2="650" stroke="#94a3b8" strokeWidth="2" />
    
    {/* Contours */}
    <path d="M 216 200 Q 250 425 263 650" fill="none" stroke="#64748b" strokeWidth="1" />
    <path d="M 484 200 Q 450 425 437 650" fill="none" stroke="#64748b" strokeWidth="1" />
    
    <path d="M 540 280 C 720 250, 750 450, 520 520" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <path d="M 530 320 C 680 320, 680 480, 500 480" fill="none" stroke="#64748b" strokeWidth="1" />
    <path d="M 545 270 C 740 240, 770 460, 525 530" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
    
    {/* Vinamilk Logo/Text */}
    <g transform="translate(350, 420) rotate(-10)">
      <text 
        x="0" 
        y="-10" 
        fontFamily="sans-serif" 
        fontSize="45" 
        fontWeight="800" 
        fill="rgba(255, 255, 255, 0.25)" 
        textAnchor="middle" 
        letterSpacing="6"
      >
        VINAMILK
      </text>
      <text 
        x="0" 
        y="30" 
        fontFamily="sans-serif" 
        fontSize="24" 
        fontWeight="600" 
        fill="rgba(255, 255, 255, 0.15)" 
        textAnchor="middle" 
        letterSpacing="6"
      >
        CAFÉ
      </text>
    </g>
  </g>
);

const Slide1 = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let active = true;
    let timer1, timer2, timer3, timer4, timer5;
    
    const runAnimation = () => {
      if (!active) return;
      setStage(0);
      timer1 = setTimeout(() => { if (active) setStage(1); }, 500); // Show cup
      timer2 = setTimeout(() => { if (active) setStage(2); }, 2000); // Show crack
      timer3 = setTimeout(() => { if (active) setStage(3); }, 3500); // Cup splits
      timer4 = setTimeout(() => { if (active) setStage(4); }, 4500); // Show callouts
      // Đã bỏ loop animation (tắt timer5) để không lặp lại gây khó chịu khi trình bày
    };
    
    runAnimation();
    
    return () => { 
      active = false;
      clearTimeout(timer1); 
      clearTimeout(timer2); 
      clearTimeout(timer3); 
      clearTimeout(timer4); 
    };
  }, []);

  return (
    <div className="slide-container">
      <div className="slide-number">01</div>
      {/* Top Panel for Title */}
      <div className="top-panel">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.h1 
            className="main-title"
            variants={{
              hidden: { opacity: 0, x: -50, filter: "blur(10px)", scale: 0.95 },
              visible: { 
                opacity: 1, x: 0, filter: "blur(0px)", scale: 1,
                transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.8 }
              }
            }}
          >
            Khám Nghiệm Một Thất Bại:<br/>
            Chiến lược Marketing của Vinamilk Café (2005-2010)
          </motion.h1>
          <motion.div 
            className="red-divider" 
            style={{ height: '4px', backgroundColor: '#e53935', margin: '15px auto' }}
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: '80px', opacity: 1, transition: { duration: 0.8, ease: "circOut" } }
            }}
          ></motion.div>
          <motion.p 
            className="subtitle"
            variants={{
              hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
              visible: { 
                opacity: 1, x: 0, filter: "blur(0px)",
                transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.8 }
              }
            }}
          >
            Báo cáo phân tích chuyên sâu:<br/>
            Căn nguyên của sự sụp đổ từ góc nhìn chiến lược sản phẩm, định vị văn hóa <strong>và phân phối.</strong>
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Panel for Cup & Callouts */}
      <div className="bottom-panel">
        <div className="blueprint-container">
          <svg viewBox="0 0 1920 850" className="cup-svg">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e53935" />
              </marker>
              <marker id="arrowhead-dim" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
              </marker>
              
              <clipPath id="left-clip">
                <polygon points="-500,-500 410,-500 410,195 390,280 440,380 370,470 400,550 360,650 360,1500 -500,1500" />
              </clipPath>
              <clipPath id="right-clip">
                <polygon points="1500,-500 410,-500 410,195 390,280 440,380 370,470 400,550 360,650 360,1500 1500,1500" />
              </clipPath>
            </defs>

            {/* Cup Drawing - Left Half */}
            <motion.g 
              initial={{ opacity: 0, x: 0, rotate: 0 }} 
              animate={stage >= 1 ? (stage >= 3 ? { opacity: 1, x: -80, rotate: -8 } : { opacity: 1, x: 0, rotate: 0 }) : { opacity: 0, x: 0, rotate: 0 }} 
              transition={{ duration: stage >= 3 ? 1 : 1, ease: "easeInOut" }}
              style={{ transformOrigin: '960px 800px' }}
            >
              <g transform="translate(435, -201.25) scale(1.5)">
                <g clipPath="url(#left-clip)">
                  {cupElements}
                </g>
              </g>
            </motion.g>

            {/* Cup Drawing - Right Half */}
            <motion.g 
              initial={{ opacity: 0, x: 0, rotate: 0 }} 
              animate={stage >= 1 ? (stage >= 3 ? { opacity: 1, x: 80, rotate: 8 } : { opacity: 1, x: 0, rotate: 0 }) : { opacity: 0, x: 0, rotate: 0 }} 
              transition={{ duration: stage >= 3 ? 1 : 1, ease: "easeInOut" }}
              style={{ transformOrigin: '960px 800px' }}
            >
              <g transform="translate(435, -201.25) scale(1.5)">
                <g clipPath="url(#right-clip)">
                  {cupElements}
                </g>
              </g>
            </motion.g>

            {/* The Crack */}
            <motion.g transform="translate(435, -201.25) scale(1.5)">
              <motion.polygon
                points="420,195 390,280 440,380 370,470 400,550 360,650 380,650 420,550 390,470 460,380 410,280 440,195"
                fill="#e53935"
                style={{ filter: "drop-shadow(0 0 10px rgba(229, 57, 53, 0.5))", transformOrigin: '350px 650px' }}
                initial={{ clipPath: "inset(0 0 100% 0)", x: 0, rotate: 0 }}
                animate={
                  stage >= 2 
                    ? (stage >= 3 
                        ? { clipPath: "inset(0 0 0% 0)", x: 47, rotate: 8 } 
                        : { clipPath: "inset(0 0 0% 0)", x: 0, rotate: 0 }) 
                    : { clipPath: "inset(0 0 100% 0)", x: 0, rotate: 0 }
                }
                transition={{ duration: stage >= 3 ? 1 : 1.2, ease: "easeInOut" }}
              />
            </motion.g>

            {/* The Chip falling off (Mẻ thật) */}
            <motion.g transform="translate(435, -201.25) scale(1.5)">
              <motion.polygon
                points="440,380 370,470 400,550 460,460"
                fill="rgba(11, 31, 56, 0.9)"
                stroke="#94a3b8"
                strokeWidth="2"
                initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                animate={stage >= 3 ? { x: 90, y: 110, rotate: 45, opacity: 1 } : { opacity: 0, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: '400px 470px' }}
              />
            </motion.g>

            {/* Callout Lines */}
            <motion.g 
              initial={{ opacity: 0 }} 
              animate={stage >= 4 ? { opacity: 1 } : { opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              {callouts.map((c) => (
                <path 
                  key={`line-${c.id}`} 
                  d={c.line} 
                  fill="none" 
                  stroke="#e53935" 
                  strokeWidth="4" 
                  markerEnd="url(#arrowhead)" 
                  strokeDasharray="4 2"
                />
              ))}
            </motion.g>

            {/* Callout HTML Elements */}
            <AnimatePresence>
              {stage >= 4 && callouts.map((c, i) => (
                <foreignObject key={`box-${c.id}`} x={c.x} y={c.y} width={c.w} height={c.h}>
                  <motion.div 
                    className="callout-box pulse-red-border"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    <div className="corner top-left"></div>
                    <div className="corner top-right"></div>
                    <div className="corner bottom-left"></div>
                    <div className="corner bottom-right"></div>
                    <h3 className="callout-title">{c.title}</h3>
                    <p className="callout-desc" dangerouslySetInnerHTML={{ __html: c.desc }}></p>
                  </motion.div>
                </foreignObject>
              ))}
            </AnimatePresence>

          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
