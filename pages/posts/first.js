import Link from 'next/link'
import Image from 'next/image';

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               <h1>Home</h1>
            </Link>
         </h2>
         <br/>
         <Image
          src="/images/vw.png"
          height={144}
          width={144}
          alt="VW Logo" 
          />
      </>	  
   )
}