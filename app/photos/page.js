import Image from 'next/image'

import dog1 from './../../public/images/dog1.png'
import dog2 from './../../public/images/dog2.png'
import dog3 from './../../public/images/dog3.png'
import dog4 from './../../public/images/dog4.png'

export default function PhotosPage () {
    return (
        <div>
            <h1 className="text-2xl mb-8 font-semibold">My Photos</h1>

            <div className="grid grid-cols-2 gap-4">
                <div className="h-60">
                    {/* <img src="/images/dog1.png" className="object-cover w-full h-full" /> */}                   
                    <Image 
                        src={dog1} 
                        alt="Picture from my Dog1"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-60">               
                    <Image 
                        src={dog2} 
                        alt="Picture from my Dog2"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-60">                  
                    <Image 
                        src={dog3} 
                        alt="Picture from my Dog3"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-60">
                    <Image 
                        src={dog4} 
                        alt="Picture from my Dog4"
                        className="object-cover w-full h-full"
                    />
                </div>       
            </div>
        </div>


    )
}