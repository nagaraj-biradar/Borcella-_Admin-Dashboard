import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ImageUloadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUloadProps> = ({
  value,
  onChange,
  onRemove,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className=" mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className=" relative w-[200px] h-[200px] ">
            <div className=" absolute top-0 right-0 z-10">
              <Button
                className=" bg-red-400 text-white"
                onClick={() => onRemove(url)}
              >
                <Trash className=" h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="collection_image"
              className=" object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="xb9dehnq" onSuccess={onUpload}>
        {({ open }) => (
          <Button className=" bg-grey-1 text-white" onClick={() => open()}>
            <Plus className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
