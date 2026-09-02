export type Author = { name: string; href?: string; me?: boolean; equal?: boolean };
export type Link = { label: string; href: string };

export type Paper = {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  venueShort?: string;
  year: number | string;
  award?: string;
  links: Link[];
  abstract: string;
  imageBefore: string;
  imageAfter?: string;
};

const ME = { name: 'Donghoon Han', me: true } as const;
const KWAK = {
  name: 'Nojun Kwak',
  href: 'http://mipal.snu.ac.kr/index.php/Nojun_Kwak',
};
const SEUNGHYEON = {
  name: 'Seunghyeon Seo',
  href: 'https://scholar.google.com/citations?user=LL9u-5IAAAAJ&hl=en&oi=ao',
};
const EUNHWAN = {
  name: 'Eunhwan Park',
  href: 'https://scholar.google.com/citations?user=FZS2KD8AAAAJ&hl=ko&oi=ao',
};

export const papers: Paper[] = [
  {
    id: 'geometric-bottleneck',
    title: 'Where Do Multilingual Vision-Language Encoders Fail on Low-Resource Languages?',
    authors: [
      ME,
      { name: 'SungHyun Moon' },
      { name: 'Aidyn Zhakatayev' },
      { name: 'Junghun Cha' },
      { name: 'SeungJae Lee' },
    ],
    venue: 'EMNLP 2026 (Main Conference)',
    venueShort: 'EMNLP',
    year: 2026,
    links: [
      { label: 'project', href: '/geometric-bottleneck' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2608.30725' },
    ],
    abstract:
      "The low-resource retrieval gap is not the linear language direction but the EOS hidden state's forward-path trajectory: swapping that single row three blocks before the projector lifts Swahili R@1 from 22.1% to 69.1%.",
    imageBefore: '/images/geombottleneck_before.png',
    imageAfter: '/images/geombottleneck_after.png',
  },
  {
    id: 'bm25v',
    title: 'Visual Words Meet BM25: Sparse Auto-encoder Visual Word Scoring for Image Retrieval',
    authors: [ME, EUNHWAN, SEUNGHYEON],
    venue: 'Preprint',
    venueShort: 'Preprint',
    year: 2026,
    links: [
      { label: 'project', href: '/bm25v' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2603.05781' },
    ],
    abstract:
      'We apply Okapi BM25 scoring to sparse visual words from a Sparse Autoencoder on ViT patch tokens, enabling efficient, interpretable image retrieval that matches dense accuracy via a two-stage pipeline.',
    imageBefore: '/images/bm25v_before.png',
    imageAfter: '/images/bm25v_after.png',
  },
  {
    id: 'cachefocus',
    title: 'CacheFocus: Dynamic Cache Re-Positioning for Efficient Retrieval-Augmented Generation',
    authors: [
      { name: 'Kun-Hui Lee', equal: true },
      { ...EUNHWAN, equal: true },
      ME,
      {
        name: 'Seung-Hoon Na',
        href: 'https://scholar.google.com/citations?user=vZB0BiQAAAAJ&hl=ko&authuser=2',
      },
    ],
    venue: 'Under Review',
    year: 2025,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2502.11101' }],
    abstract:
      'CacheFocus improves long-context handling in LLMs by optimizing cache reuse and reducing inference latency without additional training. Layer-Adaptive Cache Pruning and Adaptive Positional Allocation maintain strong performance even with extended input lengths.',
    imageBefore: '/images/cachefocus2.png',
    imageAfter: '/images/cachefocus1.png',
  },
  {
    id: 'gail',
    title: 'Layerwise-priority-based gradient adjustment for few-shot learning',
    authors: [
      {
        name: 'Jangho Kum',
        href: 'https://scholar.google.co.kr/citations?user=mzFEJVIAAAAJ&hl=ko',
      },
      { name: 'Junhoo Lee' },
      ME,
      KWAK,
    ],
    venue: 'Expert Systems with Applications',
    venueShort: 'ESWA',
    year: 2025,
    links: [
      {
        label: 'paper',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S095741742500675X?via%3Dihub',
      },
      {
        label: 'code',
        href: 'https://drive.google.com/file/d/1zkn2M_VEXRzzdBediIrJz4PhXN8uYEJ1/view?usp=sharing',
      },
    ],
    abstract:
      'GAIL adjusts per-layer gradient updates by priority for few-shot learning, aligning gradients across tasks to improve convergence speed and accuracy over prior inner-loop adaptation methods.',
    imageBefore: '/images/gail2.png',
    imageAfter: '/images/gail1.png',
  },
  {
    id: 'merlin',
    title:
      'MERLIN: Multimodal Embedding Refinement via LLM-based Iterative Navigation for Text-Video Retrieval-Rerank Pipeline',
    authors: [
      { ...ME, equal: true },
      { ...EUNHWAN, equal: true },
      { name: 'Gisang Lee', equal: true },
      { name: 'Adam Lee' },
      KWAK,
    ],
    venue: 'EMNLP 2024 Industry Track',
    venueShort: 'EMNLP',
    year: 2024,
    links: [
      { label: 'project', href: '/merlin' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2407.12508' },
      { label: 'code', href: 'https://github.com/dhk1349/MERLIN_text_to_video_search' },
    ],
    abstract:
      'MERLIN uses LLMs in a training-free iterative feedback loop to refine text-video retrieval, boosting Recall@1 by aligning user queries with video content across datasets.',
    imageBefore: '/images/merlin1.png',
    imageAfter: '/images/merlin2.png',
  },
  {
    id: 'hl-clip',
    title: 'Unleash the Potential of CLIP for Video Highlight Detection',
    authors: [
      { ...ME, equal: true },
      { ...SEUNGHYEON, equal: true },
      EUNHWAN,
      { name: 'SeongUk Nam' },
      KWAK,
    ],
    venue: 'CVPR Workshop on Efficient Large Vision Models',
    venueShort: 'CVPRW',
    year: 2024,
    links: [
      { label: 'project', href: '/hlclip' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2404.01745' },
    ],
    abstract:
      'We adapt the pre-trained multimodal CLIP encoder for video highlight detection via fine-tuning and a saliency pooling technique, achieving state-of-the-art performance.',
    imageBefore: '/images/hlclip.png',
  },
  {
    id: 'concatplexer',
    title: 'ConcatPlexer: Additional Dim1 Batching for Faster ViTs',
    authors: [
      ME,
      SEUNGHYEON,
      {
        name: 'DongHyeon Jeon',
        href: 'https://scholar.google.com/citations?user=2kW3474AAAAJ&hl=en&oi=ao',
      },
      {
        name: 'Jiho Jang',
        href: 'https://scholar.google.com/citations?hl=en&user=-EtUt1wAAAAJ',
      },
      {
        name: 'Chaerin Kong',
        href: 'https://scholar.google.com/citations?user=TownIFQAAAAJ&hl=en&oi=ao',
      },
      KWAK,
    ],
    venue: 'NeurIPS 2023 Workshop on Advancing Neural Network Training',
    venueShort: 'NeurIPSW',
    year: 2023,
    award: 'Oral',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2308.11199' }],
    abstract:
      'We expedite ViT inference by concatenating abstract visual tokens from multiple images along dim=1 and processing them collectively.',
    imageBefore: '/images/concatplexer_before.png',
    imageAfter: '/images/concatplexer_after.png',
  },
  {
    id: 'mixnerf',
    title: 'MixNeRF: Modeling a Ray with Mixture Density for Novel View Synthesis from Sparse Inputs',
    authors: [
      SEUNGHYEON,
      { ...ME, equal: true },
      {
        name: 'Yeonjin Chang',
        href: 'https://yeonjin-chang.github.io/',
        equal: true,
      },
      KWAK,
    ],
    venue: 'CVPR',
    venueShort: 'CVPR',
    year: 2023,
    links: [
      { label: 'project', href: '/mixnerf' },
      { label: 'code', href: 'https://github.com/shawn615/MixNeRF' },
      { label: 'video', href: 'https://youtu.be/PXljJordbFk' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2302.08788' },
    ],
    abstract:
      'We model a ray with a mixture density model to learn density distributions efficiently with sparse inputs, and propose ray-depth estimation as an auxiliary task for few-shot novel view synthesis.',
    imageBefore: '/images/mixnerf_before.jpg',
    imageAfter: '/images/mixnerf_after.jpg',
  },
  {
    id: 'mixdl',
    title: 'Few-shot Image Generation with Mixup-based Distance Learning',
    authors: [
      {
        name: 'Chaerin Kong',
        href: 'https://scholar.google.com/citations?user=TownIFQAAAAJ&hl=en&oi=ao',
      },
      {
        name: 'Jeesoo Kim',
        href: 'https://scholar.google.com/citations?user=FbufdJ8AAAAJ&hl=ko',
      },
      ME,
      KWAK,
    ],
    venue: 'ECCV',
    venueShort: 'ECCV',
    year: 2022,
    links: [
      { label: 'code', href: 'https://github.com/reyllama/mixdl' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2111.11672' },
    ],
    abstract:
      'For few-shot (n<100) image synthesis, we propose latent-space smoothing regularizations that empower the generator to produce diverse, perceptually continuous samples — without directly combatting memorization.',
    imageBefore: '/images/mixdl_overview.png',
  },
  {
    id: 'corr-adv',
    title:
      'Correlation-Concealing Adversarial Noise Injection for Improved Disentanglement in Label-Based Image Translation',
    authors: [
      {
        name: 'Seonguk Park',
        href: 'https://scholar.google.com/citations?user=R5Q2b2UAAAAJ&hl=ko&authuser=2',
      },
      { name: 'Jookyung Song' },
      ME,
      KWAK,
    ],
    venue: 'IEEE Access',
    venueShort: 'IEEE Access',
    year: 2023,
    links: [
      { label: 'paper', href: 'https://ieeexplore.ieee.org/abstract/document/10063866' },
    ],
    abstract:
      'We expose a limitation of multi-domain image translation models in performing recursive translations, and resolve it via additive perturbations during training that also improve overall translation quality.',
    imageBefore: '/images/corr_adv.png',
  },
  {
    id: 'vfi',
    title: 'The U-Net based GLOW for Optical-Flow-free Video Interframe Generation',
    authors: [{ name: 'Saem Park' }, ME, KWAK],
    venue: 'ICPRAM',
    venueShort: 'ICPRAM',
    year: 2022,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2103.09576' }],
    abstract:
      'A new method for video frame interpolation using an invertible U-Net based Generative Flow that avoids optical-flow techniques while preserving temporal consistency and image quality.',
    imageBefore: '/images/vfi.png',
  },
];
