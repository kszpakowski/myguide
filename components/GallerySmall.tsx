interface GelleryProps {
    urls: string[]
}

export default function GallerySmall(props: GelleryProps) {
    return (
        <div className='flex divide-x'>
            {props.urls.map(url => (
                <div key={url}>
                    <img src={url} />
                </div>))}
        </div>
    )
}