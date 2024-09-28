interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`xl:max-w-[1170px] mx-auto w-full ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}
