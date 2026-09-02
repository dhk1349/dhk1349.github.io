export type NewsItem = {
  date: string;
  body: string;
};

export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    body: 'One paper accepted to <a href="https://2026.emnlp.org/">EMNLP 2026</a> (Main Conference) — see the <a href="/geometric-bottleneck">project page</a>.',
  },
  {
    date: 'Aug 2026',
    body: 'New preprint on <a href="/geometric-bottleneck">where multilingual vision-language encoders fail</a> on low-resource languages.',
  },
  {
    date: 'Mar 2026',
    body: 'New preprint on <a href="/bm25v">BM25-V</a>: sparse visual word scoring for interpretable image retrieval.',
  },
  {
    date: 'May 2025',
    body: 'Joined <a href="https://www.dnotitia.com/">Dnotitia</a> as a Deep Learning Engineer, working on KV cache compression and multilingual multimodal retrieval.',
  },
  {
    date: 'Oct 2024',
    body: 'One paper accepted to <a href="https://2024.emnlp.org/calls/industry_track/">EMNLP 2024 Industry Track</a>.',
  },
  {
    date: 'Apr 2024',
    body: 'One paper accepted to <a href="https://sites.google.com/view/elvm/">CVPR 2024 Workshop on Efficient Large Vision Models</a>.',
  },
];
