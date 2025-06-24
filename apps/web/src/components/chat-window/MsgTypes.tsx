import { cn } from "@/lib/utils";
import type { MediaContent } from "@/types";

interface TextMessageProps {
  content: string;
  isOwnMessage: boolean;
}

export const TextMessage = ({ content, isOwnMessage }: TextMessageProps) => {
  return (
    <div
      className={cn(
        "bg-secondary flex w-fit max-w-[70%] rounded-lg px-4 py-2",
        isOwnMessage && "self-end",
      )}
    >
      {content}
    </div>
  );
};

interface ImageMessageProps {
  content: MediaContent;
  caption?: string;
  isOwnMessage: boolean;
}

export const ImageMessage = ({
  content,
  caption,
  isOwnMessage,
}: ImageMessageProps) => {
  return (
    <div
      className={cn(
        "w-fit max-w-[70%] overflow-hidden rounded-lg",
        isOwnMessage && "self-end",
      )}
    >
      <img
        src={content.url}
        alt={caption || "Image"}
        className="rounded-lg object-cover"
      />
      {caption && <p className="mt-1 text-sm">{caption}</p>}
    </div>
  );
};

interface VideoMessageProps {
  content: MediaContent;
  isOwnMessage: boolean;
}

export const VideoMessage = ({ content, isOwnMessage }: VideoMessageProps) => {
  return (
    <div
      className={cn(
        "max-w-[70%] overflow-hidden rounded-lg",
        isOwnMessage && "self-end",
      )}
    >
      <video controls className="max-w-full rounded-lg">
        <source src={content.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

interface AudioMessageProps {
  content: MediaContent;
  duration?: number;
  isOwnMessage: boolean;
}

export const AudioMessage = ({
  content,
  duration,
  isOwnMessage,
}: AudioMessageProps) => {
  return (
    <div
      className={cn(
        "bg-background max-w-[70%] rounded-lg p-3",
        isOwnMessage && "self-end",
      )}
    >
      <audio controls>
        <source src={content.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {duration && <p className="mt-1 text-xs">{duration}s</p>}
    </div>
  );
};

interface FileMessageProps {
  content: MediaContent;
  isOwnMessage: boolean;
}

export const FileMessage = ({ content, isOwnMessage }: FileMessageProps) => {
  return (
    <div
      className={cn(
        "bg-background max-w-[70%] rounded-lg p-3",
        isOwnMessage && "self-end",
      )}
    >
      <a
        href={content.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium underline"
      >
        📎 Download File
      </a>
    </div>
  );
};

// import type { MediaContent } from "@/types";

// export const TextMessage = ({ content }: { content: string }) => {
//   return <div className="text-base">{content}</div>;
// };

// export const ImageMessage = ({
//   content,
//   caption,
// }: {
//   content: MediaContent;
//   caption?: string;
// }) => {
//   return (
//     <div className="flex items-center gap-2">
//       <img
//         src={content.url}
//         alt={caption || "Image"}
//         className="h-12 w-12 rounded-full"
//       />
//       <div className="text-base">{caption}</div>
//     </div>
//   );
// };

// export const VideoMessage = ({ content }: { content: MediaContent }) => {
//   return (
//     <div className="flex items-center gap-2">
//       <video src={content.url} controls className="h-12 w-12 rounded-full" />
//       <div className="text-base">{content.caption}</div>
//     </div>
//   );
// };

// export const AudioMessage = ({
//   content,
//   duration,
// }: {
//   content: MediaContent;
//   duration?: number;
// }) => {
//   return (
//     <div className="flex items-center gap-2">
//       <audio src={content.url} controls className="h-12 w-12 rounded-full" />
//       <div className="text-base">
//         {duration ? `${duration / 60}:${duration % 60}` : "Unknown duration"}
//       </div>
//     </div>
//   );
// };

// export const FileMessage = ({ content }: { content: MediaContent }) => {
//   return (
//     <div className="flex items-center gap-2">
//       <a
//         href={content.url}
//         download
//         className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//           />
//         </svg>
//       </a>
//       <div className="text-base">{content.caption}</div>
//     </div>
//   );
// };
