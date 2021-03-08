const Confirmation = (props) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='py-24 mx-auto flex justify-center flex-col'>
        <p className='mt-2 my-auto text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Uspešno ste se prijavili!
        </p>
        <button
          onClick={() => props.history.push('/')}
          className='inline-flex justify-center mt-8 w-20 mx-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Početna
        </button>
      </div>
    </section>
  );
};

export default Confirmation;
