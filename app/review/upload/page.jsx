"use client"
import { useEffect, useState } from 'react'
import { BlobServiceClient } from '@azure/storage-blob';

const App = () => {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  //Storage account credentials
  const account = "reviewappitra"  // get the storage account name from the .env file
  const sasToken = "sp=racwdli&st=2023-08-31T13:06:48Z&se=2023-10-30T21:06:48Z&spr=https&sv=2022-11-02&sr=c&sig=pjRQdV5xn4qDV6%2FPaLWbsFIWyKbtj0Ma4um1YVw%2FINo%3D"  // get the SAS token from the .env file
  const containerName = "images"  // get the container name from the .env file
  const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);  // create a blobServiceClient
  const containerClient = blobServiceClient.getContainerClient(containerName);  // create a containerClient

  //fetch all images
  const fetchImages = async () => {

    try {
      const blobItems = containerClient.listBlobsFlat();  // get all blobs in the container     
      const urls = [];
      for await (const blob of blobItems) {
        const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);  // get the blob url
        urls.push({ name: blob.name, url: tempBlockBlobClient.url });  // push the image name and url to the urls array
      }
      setImageUrls(urls);  // set the urls array to the imageUrls state
    } catch (error) {
      console.error(error);  // Handle error
    } finally {
      setLoading(false);  // Turn off loading
    }
  };

  console.log(account);

  //save an Image
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {  // check if the file is selected
      alert('Please select an image to upload');
      return;
    }
    try {
      setLoading(true);
      const blobName = `${new Date().getTime()}-${file.name}`; // Specify a default blob name if needed
      const blobClient = containerClient.getBlockBlobClient(blobName);  // get the blob client
      await blobClient.uploadData(file, { blobHTTPHeaders: { blobContentType: file.type } }); // upload the image
      await fetchImages();   // fetch all images again after the upload is completed
    } catch (error) {
      console.error(error);  // Handle error
    } finally {
      setLoading(false); // Turn off loading
    }
  };

  // delete an Image
  const handleDelete = async (blobName) => {

    try {
      setLoading(true);  // Turn on loading
      const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
      await blobClient.delete(); // delete the blob
      fetchImages(); // fetch all images again after the delete is completed
    } catch (error) {
      console.log(error) // Handle error
    } finally {
      setLoading(false);  //
    }
  };

  // fetch all images when the page loads
  useEffect(() => {
    fetchImages();
  }, [])

  // Helper function to get the image name without extension
  const getImageNameWithoutExtension = (filename) => {
    const dotIndex = filename.lastIndexOf('.');
    return dotIndex !== -1 ? filename.slice(0, dotIndex) : filename;
  };
  return (
    <div className="container">
      {loading && <p>Loading</p>}
      <h2>📸 Image Gallery Azure Blob Storage 📸</h2><hr />
      <div className="row-form">
        <form className='upload-form'>
          <div className='upload-form_display'>
            {
              file ? <img className="displayImg" src={URL.createObjectURL(file)} alt="no pic" />
                : <p>IMG</p>
            }
          </div>
          <div className='upload-form_inputs'>
            <label htmlFor="fileInput">Input</label>
            <input type="file" style={{ display: "none" }} id="fileInput" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit" onClick={handleSubmit} >Upload</button>
          </div>
        </form>
      </div>
      <div className="row-display">
        {imageUrls.length === 0 ? <h3>😐 No Images Found😐 </h3> : (
          imageUrls && imageUrls.map((blobItem, index) => {
            return (
              <div key={index} className="card">
                <img src={blobItem.url} alt="no pic" />
                <h3 style={{ width: "90%" }}>{getImageNameWithoutExtension(blobItem.name)}</h3>
                <button className="del" onClick={() => handleDelete(blobItem.name)} > <AiFillDelete /> </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default App