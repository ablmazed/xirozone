'use client'
import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function FooterPage() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="Dashboard">Condition of Use</Link>
          <Link href="Dashboard">Privacy Notice</Link>
          <Link href="Dashboard">Help</Link>
        </div>
        <div className="flex justify-center">
          <p>© 2000-2025, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="flex justify-center text-sm text-gray-400 m-4">
          <address>
            123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
          </address>
        </div>
      </div>
    </footer>
  )
}
