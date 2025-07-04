// src/app/tutorial/lesson/[lessonId]/page.tsx
import { lessons } from '@/data/tutorial/lessons';
import { quizzes } from '@/data/tutorial/quizzes';
import LessonView from '@/components/tutorial/LessonView';

export async function generateStaticParams() {
  return lessons.map(lesson => ({
    lessonId: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = lessons.find(l => l.id === lessonId) || null;
  const quiz = quizzes.find(q => q.lessonId === lessonId) || null;

  return <LessonView lesson={lesson} quiz={quiz} />;
}