export default function ImageUpload() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log("somehow send formData to /api/upload");

    const response = fetch("../api/upload", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-upload">Picture</label>
        <input type="file" name="image" id="image-upload" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
