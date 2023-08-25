type CourseBannerProps = {
  title: string;
  instructorName: string;
  description: string;
  imageUrl: string;
};

const CourseBanner: React.FC<CourseBannerProps> = ({ title, instructorName, description, imageUrl }) => {
  return (
    <div className="relative h-[600px]">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="mx-14 text-white w-1/3">
          {/* Instructor */}
          <h2 className="text-6xl font-semibold text-center mb-2">{instructorName}</h2>
          {/* Divider */}
          <div className="mx-auto h-[1px] bg-white w-[30px] mb-2"></div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
          {/* Description */}
          <p className="mt-2 text-md text-center mb-4">{description}</p>
          {/* Buttons */}
          <div className="ml-4 text-center">
            <button className="bg-blue-500 px-4 py-2 rounded text-white">Start Class</button>
            <button className="bg-white px-4 py-2 rounded text-black ml-2">Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
