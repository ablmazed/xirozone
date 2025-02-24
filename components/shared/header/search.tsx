import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'

export default function Search() {
  const categories = ['men', 'women', 'kids', 'accessories']
  return (
    <form action="/search" method="GET" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
          <SelectValue placeholder="ALL" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem value={category} key={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="search"
        name="q"
        placeholder={`Search Site ${APP_NAME}`}
        className="text-black flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-base h-full"
      />

      <Button type="submit" className="bg-primary rounded-l-none w-auto h-full">
        <SearchIcon />
      </Button>
    </form>
  )
}
