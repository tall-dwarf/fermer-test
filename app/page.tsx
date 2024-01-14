import Slider from '@/app/components/Slider'

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
        <h1 className='title main__title'>Полезные материалы</h1>
        <h2 className='main__subtitle subtitle'>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</h2>
        <Slider />
      </div>
    </main>
  )
}
