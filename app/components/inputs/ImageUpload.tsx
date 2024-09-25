"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const handleUpload = useCallback(
    (result: any) => {
      console.log("result", result);

      onChange(result.info.secure_url);
    },
    [onChange]
  );
  console.log("value", value);

  return (
    <div>
      <CldUploadWidget
        uploadPreset="c4drqlh7"
        options={{ maxFiles: 1 }}
        onSuccess={handleUpload}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
            >
              <TbPhotoPlus size={50} />
              <div className="font-semibold text-lg">Click to upload</div>
              {value && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    alt="Upload"
                    fill
                    style={{ objectFit: "cover" }}
                    src={value}
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
