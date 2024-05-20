import BreadCrumbs from "@/components/Breadcrumbs";
import GallerySmall from "@/components/GallerySmall";
import RestaurantDetails from "@/components/RestaurantDetails";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <div className="p-4">
        <BreadCrumbs breadcrumbs={[
          { label: "Karol's guide", href: '/ksz' },
          { label: 'Italy', href: '/ksz/it' },
          { label: 'Rome', href: '/ksz/it/rome' },
          { label: 'Restaurants', href: '/ksz/it/rome/restaurants' },
          { label: 'Faro - Caffè Specialty', href: '/ksz/it/rome/restaurants/1' }
        ]} />
      </div>
      <GallerySmall urls={[
        '/IMG_7776.jpeg',
        '/IMG_7777.jpeg',
        '/IMG_7768.jpeg',
      ]} />
      <div className='mx-auto'>
        <RestaurantDetails />
      </div>
    </main>
  );
}
