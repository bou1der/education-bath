"use client";

export default function LandingPage() {

  return (
    <h1>АААА</h1>
  )
}




  // const [file, setFile] = useState<File | undefined>();
  // const [fileId, setFileId] = useState<string | undefined>();
  //
  //
  // const uploadFileResolver = useMutation({
  //   mutationKey: ["uploadFile"],
  //   mutationFn: async (file: File) => {
  //     const f = await api.file.index.post(
  //       { file },
  //       { query: { isImage: true } },
  //     );
  //
  //     if (!f.data) {
  //       throw new Error(f.error.status.toString());
  //     }
  //
  //     return f.data.id;
  //   },
  //   onSuccess: (id) => {
  //     setFileId(id);
  //   },
  //   onError: (e) => {
  //     toast.error(e.message);
  //   },
  // });
  //
  // return (
  //   <div>
  //     <img src={`/api/file/${fileId}`} />
  //     <Input
  //       onChange={(e) => setFile(e.target.files?.[0])}
  //       placeholder="Выберите файл"
  //       type="file"
  //     />
  //     <Button
  //       onClick={() => {
  //         if (!file) return;
  //         uploadFileResolver.mutate(file);
  //       }}
  //       loading={uploadFileResolver.isPending}
  //     >
  //       Отправить
  //     </Button>
  //   </div>
  // );
