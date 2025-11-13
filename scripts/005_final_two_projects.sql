-- Remove all projects and add only the 2 main projects from resume
DELETE FROM projects;

-- Insert only Delirium Detection and Financial NLP projects
INSERT INTO projects (title, description, image_url, technologies, github_url, demo_url, display_order, created_at)
VALUES
  (
    'Real-Time AI Delirium Detection System',
    'Built a 2-layer AI system integrating FFT-based audio frequency analysis and YOLOv8 computer vision to detect delirium-related distress in hospitals in real time, reducing manual nurse checks from hours to seconds. Deployed on Raspberry Pi 5 using Python and OpenCV, achieving 89% detection accuracy, 2–5 s response time, <5% false positives, and stable 24/7 operation.',
    '/computer-vision-object-detection-ai-robot.jpg',
    ARRAY['Python', 'YOLOv8', 'OpenCV', 'FFT', 'Raspberry Pi 5'],
    NULL,
    NULL,
    1,
    NOW()
  ),
  (
    'Financial News Sentiment Analysis',
    'Built NLP models (BERT, LSTM) to predict market trends from financial news with TensorFlow and scikit-learn. Tuned model accuracy and optimized text preprocessing, improving sentiment classification performance by 15%.',
    '/financial-ai-sentiment-analysis-dashboard.jpg',
    ARRAY['Python', 'BERT', 'LSTM', 'TensorFlow', 'scikit-learn', 'NLP'],
    NULL,
    NULL,
    2,
    NOW()
  );
