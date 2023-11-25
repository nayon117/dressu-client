const ToggleBtn = ({ toggleHandler }) => {
    return (
      <>
        <label
          htmlFor='Toggle3'
          className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
        >
          <input
            onChange={toggleHandler}
            id='Toggle3'
            type='checkbox'
            className='hidden peer'
          />
          <span className='px-4 py-1 rounded-l-md bg-[#332885] text-white peer-checked:bg-white peer-checked:text-black'>
             Student
          </span>
          <span className='px-4 py-1 rounded-r-md bg-white text-black  peer-checked:bg-[#332885] peer-checked:text-white'>
            Teacher
          </span>
        </label>
      </>
    )
  }
  
  export default ToggleBtn