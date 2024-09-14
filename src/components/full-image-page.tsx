import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/quaries";


export default async function FullPageImageView(props: {id: number}){
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 bg-black">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="object-contain flex shrink" alt={image.name} />
      </div>

      <div className="w-48 flex flex-col flex-shrink-0 border-l border-zinc-900 h-full">
        <div className="text-xl font-bold border-b text-center">{image.name}</div>

        <div className="flex flex-col px-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.username}</span>
        </div>

        <div className="flex flex-col px-2 mt-4">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form action={async () => {
            "use server";
            await deleteImage(props.id);
          }}>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}