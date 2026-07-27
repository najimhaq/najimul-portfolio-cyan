import SmoothLink from "@/components/ui/SmoothLink";


export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950'>
      <h1 className='text-6xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4'>
        404
      </h1>
      <p className='text-gray-400 mb-8'>Oops, this page doesn't exist.</p>
      <SmoothLink
        href='/'
        className='px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all'
      >
        Back to Home
      </SmoothLink>
    </div>
  );
}
