import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import ogImage from '@/public/og-image.png'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'mrD Indicators — Stock, Crypto Forex Indicators, Forex signal, Crypto signal.',
	description: `Markets, trading systems, trading bots, market analysis, trading signals— Trading index provider for every market from stocks, cryptocurrencies and forex. Explore our library and get our exclusive toolkits when you're ready. Build your trading system.`,
	metadataBase: new URL('https://www.mrd-indicators.com/'),
	openGraph: {
		title: 'mrD Indicators — Stock, Crypto Forex Indicators, Forex signal, Crypto signal.',
		description: `Markets, trading systems, trading bots, market analysis, trading signals— Trading index provider for every market from stocks, cryptocurrencies and forex. Explore our library and get our exclusive toolkits when you're ready. Build your trading system.`,
		url: 'https://www.mrd-indicators.com/',
		type: 'website',
		images: [
			{
				url: ogImage.src,
				width: 1200,
				height: 630,
				alt: 'mrD Indicators — Stock, Crypto Forex Indicators, Forex signal, Crypto signal.',
			},
		],
	},
	twitter: {
		site: 'https://www.mrd-indicators.com/',
		description: `Markets, trading systems, trading bots, market analysis, trading signals— Trading index provider for every market from stocks, cryptocurrencies and forex. Explore our library and get our exclusive toolkits when you're ready. Build your trading system.`,
		images: [
			{
				url: ogImage.src,
				width: 1200,
				height: 630,
				alt: 'mrD Indicators — Stock, Crypto Forex Indicators, Forex signal, Crypto signal.',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={poppins.className}
				style={
					{
						backgroundColor: '#171c32',
					}
				}
			>
				<Header />
				<div className='pt-[--header-height] min-h-[70vh]'>
					{children}
				</div>
				<Footer />
				<GoogleAnalytics gaId="AW-11484436906" />
			</body>
		</html>
	)
}
