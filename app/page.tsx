import { Container, Title, Categories } from '@/components/shared'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
	return <>
  <Container className='mt-5'>
    <Title size="lg" text='Все пиццы' className='font-extrabold'></Title>
    <Categories className='mt-5'></Categories>
  </Container>
  </>
}
