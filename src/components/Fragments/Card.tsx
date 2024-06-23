export default function Card({ title, subtitle }: { title: string, subtitle: string | React.ReactNode }) {
	return (
		<>
			{/* Card */}
			<div className='w-2/5 h-4/5 bg-gray-100/30 rounded-[40px] p-5'>
				<div className='h-full flex flex-col justify-between'>
					<h1 className='text-4xl text-gray-100 font-semibold leading-relaxed'>{title}</h1>
					<div className='text-2xl text-gray-100 leading-relaxed'>{subtitle}</div>
				</div>
			</div>
		</>
	);
}
