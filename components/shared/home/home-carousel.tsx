'use client'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import data from '@/lib/data'

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const items = data.carousels
  return (
    <Carousel
      dir="ltr"
      className="w-full mx-aut"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className="flex aspect-[16/6] relative items-center p-6 -m-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute top-1/2 w-1/3  transform -translate-y-1/2 md:left">
                  <h2 className="text-xl md:text-6xl font-bold md-4 text-primary">
                    {item.title}
                  </h2>
                  <Button className="hidden md:block">
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:left-12" />
      <CarouselNext className="right-0 md:right-12" />
    </Carousel>
  )
}
