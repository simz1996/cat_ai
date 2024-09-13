import { getImage } from "~/server/quaries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <img src={image.url} className="w-96" alt="Selected image" />
    </Modal>
  );
}