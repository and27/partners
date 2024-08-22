interface ProgressDotsProps {
  currentStep: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full ${
            currentStep >= step ? "bg-blue-600" : "bg-gray-300"
          } transition-all duration-300`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
