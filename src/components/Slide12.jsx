import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, Heart, Coffee, Users, Zap, Hexagon } from 'lucide-react';
import './Slide12.css';

const Slide12 = () => {
  return (
    <div className="slide-container slide12-wrapper">
      <div className="slide-number">12</div>
      <motion.h2 
        className="slide-title text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ĐÚC KẾT CHIẾN LƯỢC
      </motion.h2>

      <div className="slide12-content">
        {/* LEFT TEXT */}
        <motion.div 
          className="side-text left-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="hard-title">Quyền Lực Cứng</h3>
          <p>Tư duy "lấy thịt đè người". Cho rằng vốn hóa + dây chuyền + xe tải sẽ mặc định đẻ ra thị phần.</p>
        </motion.div>

        {/* CENTER VISUAL: THE SCALE */}
        <div className="scale-container">
          <svg className="scale-svg" viewBox="50 200 700 380" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#eab308" />
                <stop offset="60%" stopColor="#ca8a04" />
                <stop offset="100%" stopColor="#854d0e" />
              </linearGradient>
              <linearGradient id="gold-grad-dark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a16207" />
                <stop offset="100%" stopColor="#422006" />
              </linearGradient>
              <linearGradient id="gold-bar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
              <filter id="glow-orange" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="20" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="20" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Scale Base */}
            <path d="M 320 550 L 480 550 L 450 500 L 350 500 Z" fill="url(#gold-grad-dark)" />
            <path d="M 350 500 L 450 500 L 410 320 L 390 320 Z" fill="url(#gold-grad)" />
            
            {/* The Beam (Tilted) */}
            <g transform="translate(400, 320)">
              <motion.g 
                initial={{ rotate: 0 }}
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "0px 0px" }}
              >
                {/* Beam Line */}
                <rect x="-250" y="-10" width="500" height="20" fill="url(#gold-grad)" rx="10" />
                
                {/* Left String & Pan (Counter-Rotated) */}
                <g transform="translate(-240, 0)">
                  <motion.g 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [8, -8, 8] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    {/* Strings */}
                    <line x1="0" y1="0" x2="-70" y2="120" stroke="#ca8a04" strokeWidth="4" />
                    <line x1="0" y1="0" x2="70" y2="120" stroke="#ca8a04" strokeWidth="4" />
                    <line x1="0" y1="0" x2="0" y2="120" stroke="#ca8a04" strokeWidth="2" />
                    {/* Pan */}
                    <path d="M -90 120 Q 0 160 90 120 Z" fill="url(#gold-grad-dark)" stroke="#fef08a" strokeWidth="2" />
                    
                    {/* Left Pan Contents (Hard Power) */}
                    <g transform="translate(-60, 40)">
                      {/* Gold Bars */}
                      <rect x="10" y="50" width="40" height="25" fill="url(#gold-bar)" rx="3" transform="rotate(-15)" />
                      <rect x="40" y="45" width="40" height="25" fill="url(#gold-bar)" rx="3" transform="rotate(-5)" />
                      <rect x="25" y="25" width="40" height="25" fill="url(#gold-bar)" rx="3" transform="rotate(-10)" />
                      
                      {/* Factory and Truck using Lucide Icons wrapped in foreignObject */}
                      <foreignObject x="45" y="-10" width="100" height="80">
                         <div className="hard-icons">
                           <Factory size={40} className="icon-factory" />
                           <Truck size={30} className="icon-truck" />
                         </div>
                      </foreignObject>
                    </g>
                  </motion.g>
                </g>

                {/* Right String & Pan (Counter-Rotated) */}
                <g transform="translate(240, 0)">
                  <motion.g 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [8, -8, 8] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    {/* Strings */}
                    <line x1="0" y1="0" x2="-70" y2="120" stroke="#ca8a04" strokeWidth="4" />
                    <line x1="0" y1="0" x2="70" y2="120" stroke="#ca8a04" strokeWidth="4" />
                    <line x1="0" y1="0" x2="0" y2="120" stroke="#ca8a04" strokeWidth="2" />
                    {/* Pan */}
                    <path d="M -90 120 Q 0 160 90 120 Z" fill="url(#gold-grad-dark)" stroke="#fef08a" strokeWidth="2" />
                    
                    {/* Right Pan Contents (Soft Power) */}
                    <g transform="translate(0, 40)">
                      {/* Glowing Aura Base */}
                      <circle cx="0" cy="50" r="40" fill="#0ea5e9" filter="url(#glow-cyan)" opacity="0.4" />
                      
                      <foreignObject x="-75" y="-10" width="150" height="150">
                         <div className="soft-icons-container">
                           <Coffee size={55} className="icon-coffee glow-effect" />
                           
                           {/* Orbiting nodes */}
                           <motion.div 
                             className="orbit-container"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                           >
                             <div className="orbit-node node-1"><Heart size={16} /></div>
                             <div className="orbit-node node-2"><Users size={16} /></div>
                             <div className="orbit-node node-3"><Zap size={16} /></div>
                             <div className="orbit-node node-4"><Hexagon size={16} /></div>
                           </motion.div>
                         </div>
                      </foreignObject>
                    </g>
                  </motion.g>
                </g>
              </motion.g>
            </g>
            
            {/* Center Pivot Cover */}
            <circle cx="400" cy="320" r="25" fill="url(#gold-grad-dark)" stroke="#fef08a" strokeWidth="3" />
            <circle cx="400" cy="320" r="10" fill="#fef08a" />
          </svg>
        </div>

        {/* RIGHT TEXT */}
        <motion.div 
          className="side-text right-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="soft-title">Quyền Lực Mềm</h3>
          <p>Hương vị có hồn + Định vị thấu hiểu Insight + Trải nghiệm tại chỗ. Những thứ tiền bạc không thể ép buộc.</p>
        </motion.div>
      </div>

      {/* BOTTOM BANNER */}
      <motion.div 
        className="bottom-banner-slide12"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        Trong ngành FMCG mang đậm tính văn hóa, phân phối không thể cưỡng ép hành vi tiêu thụ.
      </motion.div>
    </div>
  );
};

export default Slide12;
