import Contact from '@/components/landing/Contact'
import Pricing from '@/components/landing/Pricing'
import Hero from '@/components/landing/Hero'
import Question from '@/components/landing/Question'
import Review from '@/components/landing/Review'
import Premium from '@/components/landing/Premium'
import Free from '@/components/landing/Free'
import Work from '@/components/landing/Work'

export default function Home() {
	return (
		<>
			<Hero />
			<Work />
			<Premium />
			<Free />
			<Pricing />
			<Review />
			<Question />
			<Contact />
		</>
	)
}
