const StartupTable = ({
  startup: {
    imageUrl,
    company,
    email,
    industry,
    growthStage,
    fundingStage,
    location,
  },
}) => {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full object-cover object-center'
              src={imageUrl}
              alt
            />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>{company}</div>
            <div className='text-sm text-gray-500'>{email}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{industry}</div>
        {/* <div className='text-sm text-gray-500'>Optimization</div> */}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {location}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {growthStage}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {fundingStage}
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          Active
        </span>
      </td>
    </tr>
  );
};

export default StartupTable;
