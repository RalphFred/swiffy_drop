import Upload from "@/components/Upload";
import { removeBackgroundFromImageFile, RemoveBgError, RemoveBgResult } from "remove.bg";

const inputFile = '';
const outputFile = '';

const apiKey = process.env.NEXT_PUBLIC_REMOVER_API_KEY || 'no api key';

// removeBackgroundFromImageFile({
//   path: inputFile,
//   apiKey: apiKey,
//   size: "regular",
//   type: "auto",
//   scale: "50%",
//   outputFile 
// }).then((result: RemoveBgResult) => {
//  console.log(`File saved to ${outputFile}`);
//   const base64img = result.base64img;
// }).catch((errors: Array<RemoveBgError>) => {
//  console.log(JSON.stringify(errors));
// });

export default function Home() {
  return (
    <div className="wrapper h-full flex-center">
      <Upload />
    </div>
  );
}
