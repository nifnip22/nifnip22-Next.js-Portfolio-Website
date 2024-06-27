export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* Card */}
			<div className='group w-full h-4/5 2xl:w-3/5 bg-gray-100/30 rounded-[40px] p-5 hover:outline hover:outline-gray-100 hover:outline-4 hover:outline-offset-8 duration-300'>
				<div className='relative h-full flex flex-col justify-between overflow-y-scroll xl:overflow-hidden'>
					{children}
				</div>
			</div>
		</>
	);
}
