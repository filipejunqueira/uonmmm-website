const SkeletonLoader = ({ 
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  lines = 1,
  circle = false,
  animation = true
}) => {
  const baseClasses = `bg-gray-200 dark:bg-gray-700 ${animation ? 'animate-pulse' : ''}`;
  
  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} rounded`}
            style={{
              width: index === lines - 1 ? '75%' : '100%',
              height: height
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circular' || circle) {
    return (
      <div
        className={`${baseClasses} rounded-full ${className}`}
        style={{ width, height: width }}
      />
    );
  }

  if (variant === 'card') {
    return (
      <div className={`${className} animate-pulse`}>
        <div className={`${baseClasses} rounded-lg`} style={{ height: height }}>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variant === 'rounded' ? 'rounded-lg' : 'rounded'} ${className}`}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;