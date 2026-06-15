import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
          home <Link href={'/about'}> About  </Link>
    </div>
  )
}

export default Header
