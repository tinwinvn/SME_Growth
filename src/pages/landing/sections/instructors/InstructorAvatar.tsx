export const InstructorAvatar = ({ name }: { name: string }) => {
  const initial = name.split(" ").slice(-1)[0][0];

  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 text-white font-extrabold text-lg shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110 bg-linear-to-br from-card-blue to-section-blue`}
    >
      {initial}
    </div>
  );
};
