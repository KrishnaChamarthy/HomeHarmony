import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "application/dwg": [".dwg"], // CAD format, adjust as necessary
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file), // Create a URL for image preview
          })
        )
      );
    },
  });
  //#9579e1 #4065fe #22caff
  return (
    <div className="pb-4 pt-12 lg:mb-36 flex flex-col items-center min-h-[100vh]">
      <div className="w-full lg:w-[80%] lg:px-16 bg-gradient-to-br from-[#9579e1] via-[#4065fe] to-[#22caff] lg:pt-12 pt-8 px-4 flex flex-col items-center h-[400px] relative rounded-xl ">
        <h2 className="text-white text-4xl pb-2 tracking-tighter lg:text-5xl text-center">
          Upload Your Blueprint to Begin Your Design Journey
        </h2>
        <p className="my-2 max-w-2xl lg:py-6 p-2 text-lg lg:text-xl leading-relaxed tracking-tight text-center text-[#DADADA]">
          Easily upload your room or house blueprint to start creating your
          personalized interior design. Supported formats: JPEG, PNG, PDF, or
          CAD files.
        </p>
        <div className="absolute lg:top-[60%] md:top-[60%] top-[80%] w-full lg:w-[80%] p-10 bg-[#1A1A1A] rounded-xl ">
          <div
            {...getRootProps()}
            className={`border-dashed border-2 border-white py-4 px-6 rounded-lg w-full text-center cursor-pointer ${
              isDragActive ? "bg-[#1A1A1A]" : "bg-[#1A1A1A]"
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center lg:py-20 py-2 lg:gap-10 gap-4 text-[#DADADA]">
              <div className="bg-[#3B3B3B] p-4 text-4xl rounded-full  ">
                <IoCloudUploadOutline />
              </div>
              <p className="bg-[#3B3B3B] py-2 px-4 text-md rounded-full">
                Drag & Drop files here, or click to select files
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-4 gap-4 justify-center">
            {uploadedFiles.map((file, index) =>
              file.type.startsWith("image/") ? (
                <div
                  key={index}
                  className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden"
                >
                  <img
                    src={file.preview}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <p key={index} className="text-white">
                  Uploaded: {file.name}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
