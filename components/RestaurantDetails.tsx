interface RestaurantDetailsProps {

}

export default function RestaurantDetails(props: RestaurantDetailsProps) {
    return (
        <div className='p-10  max-w-screen-xl grid gap-12'>
            <div>
                <h1>Faro - Caffè Specialty</h1>
                <ul className='text-sm'>
                    <li>
                        Via Piave, 55, 00187 Roma RM, Włochy
                    </li>
                    <li>
                        €€ · Meats and Grills, Traditional Cuisine
                    </li>
                </ul>
            </div>

            <div>
                <h2>Karol Guide’s Point Of View</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div>
                <h2>Rating</h2>
                <div>
                    <p>Taste: 8/10</p>
                    <p>Look: 5/10</p>
                    <p>Atmosphere: 6/10</p>
                </div>
            </div>

            <div>
                <h2>Location</h2>
            </div>

            <div>
                <h2>Information</h2>
            </div>

        </div>

    )
}