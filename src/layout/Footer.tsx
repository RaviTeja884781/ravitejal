import { React, SchadCn, Tailwind, TypeScript, Vite } from '@/assets/technologies';

const Footer = () => {
  return (
    <footer className=" flex items-center justify-between py-8 px-4 md:px-10 lg:px-20 ">
      <div className="text-muted-foreground">
        <p>© 2025 Ravi Teja. All rights reserved.</p>
      </div>
      <div className="text-muted-foreground">
        <p className="flex gap-2">
          Powered by.
          <div className="flex gap-2 items-center">
            <React className="size-4" />
            <TypeScript className="size-4" />
            <Tailwind className="size-4" />
            <SchadCn className="size-4" />
            <Vite className="size-4" />
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
