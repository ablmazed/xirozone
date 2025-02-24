import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Search from './search'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center header-button font-ex text-2xl m-1"
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
            </Link>
          </div>
          <div className="md:block hidden flex-1 max-w-xl ">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block ">
          <Search />
        </div>
      </div>

      <div className="bg-gray-800 flex px-3  items-center mb-[1px]">
        <Button
          variant="ghost"
          className="header-button flex items-center gap-1 text-base[&_svg]:size-6"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center gap-3 flex-wrap overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link href={menu.href} key={menu.href}>
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
