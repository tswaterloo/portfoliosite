-- Delete ALL existing projects
TRUNCATE TABLE projects RESTART IDENTITY CASCADE;

-- Insert ONLY the 3 projects from the resume in the correct order
INSERT INTO projects (title, description, technologies, github_url, demo_url, category, featured, image_url, display_order) VALUES
(
    'Real-Time AI Delirium Detection System',
    'Built a 2-layer AI system integrating FFT-based audio frequency analysis and YOLOv8 computer vision to detect delirium-related distress in hospitals in real time, reducing manual nurse checks from hours to seconds. Deployed on Raspberry Pi 5 using Python and OpenCV, achieving 89% detection accuracy, 2–5 s response time, <5% false positives, and stable 24/7 operation.',
    ARRAY['Python', 'YOLOv8', 'OpenCV', 'FFT', 'Raspberry Pi 5'],
    NULL,
    NULL,
    'AI/ML',
    true,
    '/computer-vision-object-detection-ai-robot.jpg',
    1
),
(
    'Financial News Sentiment Analysis',
    'Built NLP models (BERT, LSTM) to predict market trends from financial news with TensorFlow and scikit-learn. Tuned model accuracy and optimized text preprocessing, improving sentiment classification performance by 15%.',
    ARRAY['Python', 'BERT', 'LSTM', 'TensorFlow', 'scikit-learn', 'NLP'],
    NULL,
    NULL,
    'AI/ML',
    true,
    '/financial-ai-sentiment-analysis-dashboard.jpg',
    2
),
(
    'Full-Stack Portfolio Website',
    'Engineered a full-stack web app using TypeScript, React, and Next.js 15 with PostgreSQL backend, implementing RESTful APIs for dynamic project data loading and contact form submissions with automated email notifications.',
    ARRAY['TypeScript', 'React', 'Next.js 15', 'PostgreSQL', 'REST APIs'],
    NULL,
    'https://tanushshah.vercel.app/',
    'Web Development',
    true,
    '/modern-portfolio-website-dark-theme.jpg',
    3
);
