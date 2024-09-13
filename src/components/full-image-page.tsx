import { getImage } from "~/server/quaries";


export default async function FullPageImageView(props: {id: number}){

  const image = await getImage(props.id);
  return <img src={image.url} className="w-96" alt="Selected image" />
   
}