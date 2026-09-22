import React from 'react'

const GlobalLoading = () => {
  return (

<div className="flex min-h-screen items-center justify-center bg-base-200/40 px-4">
  <div className="flex flex-col items-center justify-center text-center">
    
    {/* Animated Loader */}
    <div className="relative mb-6">
      {/* Outer Glow */}
      <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>

      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-base-300 bg-base-100 shadow-xl">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    </div>

    {/* Loading Text */}
    <h2 className="text-xl font-bold text-base-content">
      Loading Books
    </h2>

    <p className="mt-2 text-sm text-base-content/60">
      Please wait while we prepare your collection...
    </p>

    {/* Animated Dots */}
    <div className="mt-4 flex gap-1">
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary"></span>
    </div>
  </div>
</div>


  )
}

export default GlobalLoading
