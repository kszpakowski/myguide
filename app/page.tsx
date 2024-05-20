export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="wrap-breadcrumb pl-6">
        <ol className='flex p-4'>
          <li className="before:content-['>'] before:p-2">Karol's guide</li>
          <li className="before:content-['>'] before:p-2">Poland</li>
          <li className="before:content-['>'] before:p-2">Warsaw</li>
          <li className="before:content-['>'] before:p-2">Restaurants</li>
          <li className="before:content-['>'] before:p-2">Butchery & Wine</li>
        </ol>
      </div>
      <div className='flex divide-x'>
        <div>
          <img src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/80df661e26ee438580db2398c3fa2709?w=600&amp;h=600&amp;org_if_sml=1" />
        </div>
        <div className=''>
          <img src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/aafdeb461fbe428db0989f72ad898529?w=600&amp;h=600&amp;org_if_sml=1" />
        </div>
        <div className=''>
          <img src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/68f6c253dfa84cfd81f43c5e30199b81?w=600&amp;h=600&amp;org_if_sml=1" />
        </div>
      </div>
      <div className='mx-auto'>
        <div className='p-10  max-w-screen-xl grid gap-12'>
          <div>
            <h1>Butchery & Wine</h1>
            <ul className='text-sm'>
              <li>
                ul. Żurawia 22, Warsaw, 00 515, Polan
              </li>
              <li>
                €€ · Meats and Grills, Traditional Cuisine
              </li>
            </ul>
          </div>

          <div>
            <h2>Karol Guide’s Point Of View</h2>
            <p>The name of this busy modern bistro says it all; the emphasis is on steaks, which are dry-aged for a minimum of 28 days in their glass-fronted ageing fridges. The cuts are then skilfully cooked in the Bertha oven, where temperatures can reach up to 500°C. Try a Polish cut or one imported from further afield, accompanied with a glass of red wine. Non-steak dishes might include homemade black pudding and Kashubian style fish soup.</p>
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
            <h2>Audience</h2>
            <ul>
              <li>Friends</li>
              <li>Coworkers</li>
            </ul>
          </div>

          <div>
            <h2>Location</h2>
          </div>

          <div>
            <h2>Information</h2>
          </div>

        </div>

      </div>
    </main>
  );
}
