import Portfolio from './nov24/portfolio'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nabiel Ahammed | Fullstack Developer & System Programmer',
  description: "Explore Nabiel Ahammed’s portfolio showcasing innovative projects in SaaS, TypeScript, Rust, and Fullstack Development expertise.",
  keywords: ['Nabiel Ahammed', 'Fullstack Developer', 'System Programmer', 'TypeScript', 'Rust', 'SaaS Development', 'Portfolio'],
  author: 'Nabiel Ahammed',
  openGraph: {
    title: 'Nabiel Ahammed | Fullstack Developer & System Programmer',
    description: "Dive into Nabiel Ahammed’s professional portfolio featuring innovative SaaS solutions, expertise in TypeScript, Rust, and system programming.",
    url: 'https://www.naybyal.vercel.app',
    type: 'website',
  },
  
};

const Page = () => {
  return (
    <>
      <Portfolio />
    </>
  );
}

export default Page;