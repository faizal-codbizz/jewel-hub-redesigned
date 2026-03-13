interface CustomJewelIconProps {
  className?: string;
  size?: number;
}

const CustomJewelIcon: React.FC<CustomJewelIconProps> = ({ 
  className = "w-16 h-16", 
  size 
}) => {
  const sizeStyles = size ? { width: size, height: size } : {};
  
  return (
    <svg 
      viewBox="0 0 1024 1024" 
      className={className}
      style={sizeStyles}
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Ring */}
      <circle cx="512" cy="650" r="180" />
      
      {/* Diamond/Gem */}
      <polygon points="512,300 580,400 512,500 444,400" />
      
      {/* Ring Setting */}
      <path d="M444,400 Q444,420 460,430 L464,450 Q480,470 512,470 Q544,470 560,450 L564,430 Q580,420 580,400" />
      
      {/* Diamond Facets */}
      <line x1="512" y1="300" x2="512" y2="400" />
      <line x1="478" y1="350" x2="546" y2="350" />
      <line x1="495" y1="375" x2="529" y2="375" />
    </svg>
  );
};

export default CustomJewelIcon;