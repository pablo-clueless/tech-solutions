interface Props {
  resetErrorBoundary: () => void
}

const ErrorFallback = ({resetErrorBoundary}:Props) => {
  return (
    <div className='w-screen h-screen grid place-items-center my-auto px-4 md:px-0'>
      <div role='alert' className='w-full max-w-[60ch] bg-red-100 px-2 md:px-14 py-8 rounded text-center'>
        <h2 className='text-5xl font-bold text-red-600'>Oops!</h2>
				<div className='text-gray-700 py-4 my-10'>
					<p>It seems something went wrong, Sorry for the inconvenience.</p>
					<p>
						Our engineers have been informed and are working to fix it. Please reload
						the page to continue.
					</p>
				</div>
        <button onClick={resetErrorBoundary} className="bg-red-600 text-white font-semibold px-8 py-2 rounded transition-transform">
					Reload
				</button>
      </div>
    </div>
  )
}

export default ErrorFallback