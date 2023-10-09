type OGImage = {
  height?: number;
  width?: number;
  type: string;
  url: string;
};

export default interface Repo {
  name: string;
  description: string;
  html_url: string;
  ogImage: OGImage;
}