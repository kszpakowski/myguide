import Link from "next/link"

interface BreadcrumbsProps {
  breadcrumbs: {
    label: string,
    href: string
  }[]
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {

  return (
    <nav>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-revers'>
        {breadcrumbs.map((breadcrumb, idx) => (
          <li key={idx}>
            <div className="flex items-center">
              {idx !== 0 && (
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
              )}
              <Link href={breadcrumb.href} className="text-sm font-medium text-gray-700 hover:text-gray-400">{breadcrumb.label}</Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}