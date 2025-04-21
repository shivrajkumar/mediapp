export interface VideoType {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
  category?: string;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  selectedOption?: string;
}

export interface TestResult {
  title: string;
  description: string;
  recommendation: string;
  image: any;
}
