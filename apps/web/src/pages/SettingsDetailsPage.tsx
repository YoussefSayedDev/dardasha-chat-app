export default function SettingsDetailsPage({
  id,
}: {
  id: string | undefined;
}) {
  return (
    <div>
      <h1>Settings Details</h1>
      <p>ID: {id}</p>
    </div>
  );
}
