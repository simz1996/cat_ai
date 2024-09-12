
const mockUrls = [
  "https://utfs.io/f/c179b732-2b03-4b1a-8fdf-89fb7bd1c865-e7tkos.webp",
  "https://utfs.io/f/78c2ce66-0061-44d9-bf4c-c33653544c50-vmbbu5.webp",
  "https://utfs.io/f/65e5d5c7-60e9-42b1-894a-982bcc396426-1nq2cb.webp",
  "https://utfs.io/f/39d93511-1380-4bd4-b17d-8cc8c496c81b-e7tkop.webp",
  "https://utfs.io/f/8c785a97-dae0-4c2f-b1f4-46d780acf1b4-vmbbua.webp",
  "https://utfs.io/f/3074df50-cc77-4c71-84a1-459a42004826-vmbbu7.webp"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}