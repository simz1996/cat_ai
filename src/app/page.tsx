import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "../server/db";

export const dynamic = 'force-dynamic';


async function Images(){ const images = await db.query.images.findMany({

  orderBy: (model, { desc }) => [desc(model.id)],
});
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  )
}


export default async function HomePage() {
 
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above to view the gallery</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
        
      
    </main>
  );
}