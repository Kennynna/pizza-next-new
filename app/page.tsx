import {
	Container,
	Title,
	TopBar,
	Filters,
	CheckboxFiltersGroup,
} from '@/components/shared'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Container className='mt-5'>
				<Title size='lg' text='Все пиццы' className='font-extrabold'></Title>
			</Container>


				<TopBar />


        <Container className='pb-14 mt-10'>
          <div className='flex gap-[60px]'>


            {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters/>
          </div>  


          {/* Список товаров */}

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              Список товаров
            </div>
          </div>


          </div>

        </Container>
		</>
	)
}
