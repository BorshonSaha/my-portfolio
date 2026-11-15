/**
 * Google Drive helpers. Every function accepts either a full share link or a bare file ID:
 *   https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing
 *   https://drive.google.com/open?id=<FILE_ID>
 *   <FILE_ID>
 * Files must be shared as "Anyone with the link" (Viewer).
 */
export function getDriveFileId(input: string): string {
  const v = input.trim();
  const path = v.match(/\/d\/([\w-]+)/);
  if (path?.[1]) return path[1];
  const query = v.match(/[?&]id=([\w-]+)/);
  if (query?.[1]) return query[1];
  return v;
}

export const driveDownloadUrl = (input: string) =>
  `https://drive.google.com/uc?export=download&id=${encodeURIComponent(getDriveFileId(input))}`;

export const drivePreviewUrl = (input: string) =>
  `https://drive.google.com/file/d/${encodeURIComponent(getDriveFileId(input))}/preview`;

export const driveViewUrl = (input: string) =>
  `https://drive.google.com/file/d/${encodeURIComponent(getDriveFileId(input))}/view`;

export const driveThumbnailUrl = (input: string, width = 800) =>
  `https://drive.google.com/thumbnail?id=${encodeURIComponent(getDriveFileId(input))}&sz=w${width}`;
