const mockUrls = [
  "https://utfs.io/f/91bdbbfa-0358-4a8d-a480-c7b7d6b25727-cbf2lm.jpeg",
  "https://utfs.io/f/7922bbea-e4a3-47ee-b4c7-93078b5cdefc-v34o84.jpeg",
  "https://utfs.io/f/24e98e11-5078-4f17-b271-a0d89f3304c1-7rs8yi.jpeg",
  "https://utfs.io/f/7cc269ca-1dda-4e03-9f69-137af8ad47c7-bmdbvt.jpeg",
  "https://utfs.io/f/d1dd476a-2f36-44dd-88d8-266e87ef3212-407prl.jpeg",
  "https://utfs.io/f/8dfa5bac-d4d0-4b6e-b540-1155be379d60-fmpjud.jpeg",
  "https://utfs.io/f/405d5fad-210b-4d64-b0ba-3caf8fc34bbd-tniths.jpeg",
  "https://utfs.io/f/03b5fd3b-57b0-4ab9-8d8f-67b9342dc10f-ra8sef.jpeg",
  "https://utfs.io/f/c44520f9-badc-4201-9f34-880877d2a3ed-pp3e6l.jpeg",
  "https://utfs.io/f/a8dffd6f-26f9-4fdb-ae1c-787f407c2616-o43cl.jpeg",
];
const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image, index) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
