"use client";
import Image from "next/image";
import { useState } from "react";

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file); // Save the file to use later
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    try {
      const formData = new FormData();
      formData.append("image", selectedFile); // Use the saved file

      const response = await fetch("/api/removebg", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setOutputImage(data.output_url);
      } else {
        console.error("Error removing background:", data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {selectedImage ? (
        <div className="mt-8 w-full max-w-md">
          <Image
            src={selectedImage}
            alt="Uploaded Image"
            width={400}
            height={400}
          />
          <button
            onClick={handleRemoveBackground}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Remove Background
          </button>
        </div>
      ) : (
        <label
          htmlFor="file-upload"
          className="w-full max-w-md p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-gray-400 transition"
        >
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">
              Drag and drop an image <br /> or{" "}
              <span className="text-blue-600 underline">browse to upload.</span>
            </p>
            <div className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Upload your photo
            </div>
            <p className="mt-2 text-sm text-gray-500">
              File must be JPEG, JPG or PNG and up to 40MB
            </p>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}
      {outputImage && (
        <div className="mt-8 w-full max-w-md">
          <Image
            src={outputImage}
            alt="Processed Image"
            width={400}
            height={400}
          />
        </div>
      )}
    </div>
  );
}
