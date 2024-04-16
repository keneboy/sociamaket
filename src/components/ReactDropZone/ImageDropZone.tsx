import React, { useState, useCallback, useEffect } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Badge, Flex, Icon, Stack } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface MyDropzoneProps {
  uploadComponent: React.ReactNode;
  name: string;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ uploadComponent, name }) => {
  const { errors, setFieldValue } = useFormikContext<MyDropzoneProps>();
  const fieldError = errors[name as keyof MyDropzoneProps];
  const [validFiles, setValidFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const newValidFiles: File[] = [];

      acceptedFiles.forEach((file: File) => {
        if (file.size > 5 * 1024 * 1024) {
          alert(`${file.name} is too large. Max file size is 5 MB.`);
          return;
        }

        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const img = new Image();
          img.src = event.target?.result as string;
          img.onload = () => {
            if (img.width < 100) {
              alert(`${file.name} is too small. Min width is 600px.`);
            } else {
              newValidFiles.push(file);
              setValidFiles((prevFiles) => [...prevFiles, file]);
            }
          };
        };
        reader.readAsDataURL(file);
      });

      rejectedFiles.forEach((rejectedFile: FileRejection) => {
        console.log("Rejected:", rejectedFile.file.name);
      });
    },
    []
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      // 'image/avif': ['.avif']
    },
  });

  const handleRemoveFile = (file: File) => {
    setValidFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };
  useEffect(() => {
    setFieldValue(name, validFiles);
  }, [validFiles]);
  return (
    <Stack direction={"row"} alignItems={"center"} mt="10px">
      <Badge
        w="82px"
        h="82px"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        colorScheme="green"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Icon as={FaPlus} boxSize={"15px"} cursor="pointer" />
      </Badge>
      <Flex maxW={"calc(100% - 82px)"} overflowX={"scroll"} gap={"10px"}>
        {validFiles.map((file: File, index: number) => (
          <div
            key={index}
            style={{
              minWidth: "82px",
              height: "82px",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
            className="drop__zone__image"
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(108, 142, 160, 0.3), rgba(108, 142, 160, 0.4)), url(${URL.createObjectURL(
                  file
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              className="icon_remover"
              onClick={() => handleRemoveFile(file)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
            >
              <Icon as={FaTimes} color="white" />
            </div>
          </div>
        ))}
      </Flex>
    </Stack>
  );
};

export default MyDropzone;
