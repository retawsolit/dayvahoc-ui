const documents = [
  { title: "Node.js Advanced Guide", downloads: 450, rating: 4.8 },
  { title: "React Best Practices", downloads: 380, rating: 4.7 },
  { title: "Database Design 101", downloads: 320, rating: 4.5 },
  { title: "API Development Tutorial", downloads: 290, rating: 4.6 },
  { title: "DevOps Essentials", downloads: 250, rating: 4.4 },
];

const PopularDocumentsList = () => {
  return (
    <div className="bg-background text-foreground rounded-lg shadow-md p-4 border border-border">
      <h2 className="font-semibold text-lg mb-4">Tài liệu phổ biến nhất</h2>
      <ul className="space-y-3">
        {documents.map((doc, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{doc.title}</p>
              <p className="text-sm text-muted-foreground">
                {doc.downloads} lượt tải • ⭐ {doc.rating}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularDocumentsList;
