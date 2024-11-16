import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "application/dwg": [".dwg"],
    },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.filter(
        (file) => !uploadedFiles.some((uploaded) => uploaded.name === file.name)
      );
      console.log(newFiles);

      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        ...newFiles.map((file) => ({
          name: file.name,
          preview: URL.createObjectURL(file),
          sizeInKB: (file.size / 1024).toFixed(2),
          sizeInMB: (file.size / (1024 * 1024)).toFixed(2),
          sizeDisplay:
            file.size < 102400
              ? `${(file.size / 1024).toFixed(2)} KB`
              : `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        })),
      ]);
    },
  });

  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <div className="pb-4 pt-12 lg:mb-36 flex flex-col items-center">
        <div className="w-full lg:w-[80%] lg:px-16 bg-gradient-to-br from-[#9579e1] via-[#4065fe] to-[#22caff] lg:pt-12 pt-8 px-4 flex flex-col items-center h-[400px] relative rounded-xl">
          <h2 className="text-white text-4xl pb-2 tracking-tighter lg:text-5xl text-center">
            Upload Your Blueprint to Begin Your Design Journey
          </h2>
          <p className="my-2 max-w-2xl lg:py-6 p-2 text-lg lg:text-xl leading-relaxed tracking-tight text-center text-[#DADADA]">
            Easily upload your room or house blueprint to start creating your
            personalized interior design. Supported formats: JPEG, PNG, PDF, or
            CAD files.
          </p>
          <div className="absolute lg:top-[60%] md:top-[60%] top-[80%] w-full lg:w-[80%] p-10 bg-[#1A1A1A] rounded-xl">
            <div
              {...getRootProps()}
              className={`border-dashed border-2 border-white py-4 px-6 rounded-lg w-full text-center cursor-pointer ${
                isDragActive ? "bg-[#1A1A1A]" : "bg-[#1A1A1A]"
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center lg:py-20 py-2 lg:gap-10 gap-4 text-[#DADADA]">
                <div className="bg-[#3B3B3B] p-4 text-4xl rounded-full">
                  <IoCloudUploadOutline />
                </div>
                <p className="bg-[#3B3B3B] py-2 px-4 text-md rounded-full">
                  Drag & Drop files here, or click to select files
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[250px] lg:mt-[350px] w-full lg:w-[70%] py-5 px-10 bg-[#1A1A1A] rounded-xl text-[#DADADA]">
          <h3 className="text-2xl font-semibold">Uploaded Files</h3>
          <div className="flex flex-col my-4 gap-4 items-center">
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="text-[#DADADA] w-full py-2 px-3 bg-[#1A1A1A] rounded-md shadow-[0_2px_10px_rgba(255,255,255,0.5)]"
                >
                  <div className="text-lg font-semibold break-words">
                    {file.name}
                  </div>

                  <div className="text-sm text-[#DADADA]">
                    {file.sizeDisplay}
                  </div>
                </div>
              ))
            ) : (
              <div>Upload Files to See</div>
            )}
          </div>
        </div>

        <div className="mt-10 py-5 px-7 text-2xl bg-gradient-to-br from-[#9579e1] via-[#4065fe] to-[#22caff] rounded-xl cursor-pointer">
          Create 3D Space
        </div>
      </div>
    </div>
  );
};

export default Upload;
