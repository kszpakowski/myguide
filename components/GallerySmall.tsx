import Image from "next/image"

interface GelleryProps {
    urls: string[]
}

export default function GallerySmall(props: GelleryProps) {
    return (
        <div className='columns-3 gap-0 divide-x'>
            {props.urls.map(url => (
                <div className="relative w-full aspect-square" key={url}>
                    <Image alt='' fill={true} src={url} />
                </div>
            ))}
        </div>
    )
}