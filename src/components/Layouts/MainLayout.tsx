import Navbar from '@/components/Fragments/Navbar';
import Footer from '@/components/Fragments/Footer';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	
	return (
		<>
			<div className={`px-10 py-12 lg:px-24 lg:py-16 w-full ${pathname === '/' ? 'h-[1550px]' : 'h-[2000px]'} lg:h-[1700px] 2xl:h-screen flex flex-col justify-between`}>
				<Navbar />
                    {children}
				<Footer />
			</div>
		</>
	);
}
