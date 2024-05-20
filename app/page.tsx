import BreadCrumbs from "@/components/Breadcrumbs";
import GallerySmall from "@/components/GallerySmall";
import RestaurantDetails from "@/components/RestaurantDetails";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <div className="p-4">
        <BreadCrumbs breadcrumbs={[
          { label: "Karol's guide", href: '/ksz' },
          { label: 'Poland', href: '/ksz/pl' },
          { label: 'Warsaw', href: '/ksz/pl/warsaw' },
          { label: 'Restaurants', href: '/ksz/pl/warsaw/restaurants' },
          { label: 'Butchery & Wine', href: '/ksz/pl/warsaw/restaurants/1' }
        ]} />
      </div>
      <GallerySmall urls={[
        'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/80df661e26ee438580db2398c3fa2709?w=600&amp;h=600&amp;org_if_sml=1',
        'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/aafdeb461fbe428db0989f72ad898529?w=600&amp;h=600&amp;org_if_sml=1',
        'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/68f6c253dfa84cfd81f43c5e30199b81?w=600&amp;h=600&amp;org_if_sml=1'
      ]} />
      <div className='mx-auto'>
        <RestaurantDetails />
      </div>
    </main>
  );
}
