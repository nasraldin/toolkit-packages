// Test Next.js file
import { NextPage } from 'next';

interface PageProps {
  title: string;
}

const TestPage: NextPage<PageProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default TestPage;
