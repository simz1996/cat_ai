

import { getImage } from "~/server/quaries";


export default async function FullPageImageView(props: {id: number}){

  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 bg-black">
      <div className="flex-shrink flex justify-center items-center">
      <img src={image.url} className="object-contain flex shrink" alt={image.name} />
      </div>

      <div className="w-45 flex flex-col flex-shrink-0 border-l zinc-900 p-4 ">
        <div className="text-xl font-bold">{image.name}</div>
      </div>

    </div>
  );
}